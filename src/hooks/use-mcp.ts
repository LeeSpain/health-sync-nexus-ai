import { useState } from 'react';
import { 
  MCPToolRequest, 
  MCPToolResponse, 
  MCPToolDefinition,
  MCPToolExecution
} from '@/lib/mcp/types';
import MCPHostService from '@/lib/mcp/mcp-host';
import { createMCPClient } from '@/lib/mcp/mcp-client';
import { MCP_TOOLS } from '@/lib/mcp/tool-definitions';
import { AgentType } from '@/lib/agent-integration/types';
import { toast } from 'sonner';

/**
 * Hook for using MCP functionality in components
 * 
 * This hook provides access to MCP tools and functionalities,
 * allowing components to execute tools and get tool analytics.
 */
export function useMCP(agentId: AgentType = 'isabella') {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastExecution, setLastExecution] = useState<MCPToolExecution | null>(null);
  
  // Get MCP client for the specified agent
  const mcpClient = createMCPClient(agentId);
  const mcpHost = MCPHostService;
  
  /**
   * Initialize the MCP system by registering all tools
   */
  const initializeMCP = () => {
    // Register all tools with the MCP host
    Object.values(MCP_TOOLS).forEach(tool => {
      mcpHost.registerTool(tool);
    });
    
    // Register mock servers for tools
    mcpHost.registerToolServer('create_ticket', 'http://localhost:3001/api/tools/tickets');
    mcpHost.registerToolServer('schedule_appointment', 'http://localhost:3001/api/tools/appointments');
    mcpHost.registerToolServer('record_wellness_metric', 'http://localhost:3001/api/tools/wellness');
    mcpHost.registerToolServer('send_email', 'http://localhost:3001/api/tools/emails');
    mcpHost.registerToolServer('fetch_patient_summary', 'http://localhost:3001/api/tools/patients');
    mcpHost.registerToolServer('transcribe_voice', 'http://localhost:3001/api/tools/voice');
    mcpHost.registerToolServer('generate_document', 'http://localhost:3001/api/tools/documents');
    mcpHost.registerToolServer('log_call', 'http://localhost:3001/api/tools/calls');
    
    console.log('[MCP] Initialized MCP system with all tools');
  };
  
  /**
   * Execute an MCP tool
   */
  const executeTool = async (
    toolName: string, 
    inputs: Record<string, any>,
    context?: Record<string, any>
  ): Promise<MCPToolResponse> => {
    setLoading(true);
    setError(null);
    
    try {
      const request: MCPToolRequest = {
        tool: toolName,
        inputs,
        context,
        metadata: {
          agentId,
          requestId: `req_${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      };
      
      const response = await mcpClient.callTool(request);
      
      // Get the last execution for this request
      const executions = mcpHost.getExecutionsHistory();
      const execution = executions.find(e => 
        e.toolName === toolName && 
        e.agentId === agentId &&
        e.status !== 'pending'
      );
      
      if (execution) {
        setLastExecution(execution);
      }
      
      if (response.status === 'error') {
        setError(response.error?.message || 'Unknown error');
        toast.error(`Tool execution failed: ${response.error?.message}`);
      } else {
        toast.success(`Successfully executed ${toolName}`);
      }
      
      setLoading(false);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      setLoading(false);
      toast.error(`Failed to execute tool: ${errorMessage}`);
      throw err;
    }
  };
  
  /**
   * Get available tools for the current agent
   */
  const getAvailableTools = async (): Promise<MCPToolDefinition[]> => {
    try {
      return await mcpClient.discoverTools();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      return [];
    }
  };
  
  /**
   * Get analytics for a specific tool
   */
  const getToolAnalytics = (
    toolName: string, 
    timeframe: 'day' | 'week' | 'month' = 'week'
  ) => {
    return mcpHost.getToolAnalytics(toolName, timeframe);
  };
  
  /**
   * Get execution history for all tools
   */
  const getExecutionHistory = () => {
    return mcpHost.getExecutionsHistory();
  };
  
  return {
    loading,
    error,
    lastExecution,
    initializeMCP,
    executeTool,
    getAvailableTools,
    getToolAnalytics,
    getExecutionHistory
  };
}
