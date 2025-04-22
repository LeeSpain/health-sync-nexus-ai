
import { 
  MCPHost, 
  MCPToolDefinition, 
  MCPToolRequest, 
  MCPToolResponse, 
  MCPToolExecution 
} from './types';
import { v4 as uuidv4 } from 'uuid';

/**
 * MCP Host implementation for Isabella
 * Acts as the central tool orchestration layer that manages all MCP tools
 */
export class MCPHostService implements MCPHost {
  private static instance: MCPHostService;
  private tools: Map<string, MCPToolDefinition> = new Map();
  private executionsHistory: MCPToolExecution[] = [];
  private toolServers: Map<string, string> = new Map(); // tool name -> server URL
  
  private constructor() {}
  
  public static getInstance(): MCPHostService {
    if (!MCPHostService.instance) {
      MCPHostService.instance = new MCPHostService();
    }
    return MCPHostService.instance;
  }
  
  public registerTool(tool: MCPToolDefinition): void {
    this.tools.set(tool.name, tool);
    console.log(`[MCP Host] Registered tool: ${tool.name}`);
  }
  
  public unregisterTool(toolName: string): void {
    this.tools.delete(toolName);
    console.log(`[MCP Host] Unregistered tool: ${toolName}`);
  }
  
  public registerToolServer(toolName: string, serverUrl: string): void {
    this.toolServers.set(toolName, serverUrl);
    console.log(`[MCP Host] Registered server for tool: ${toolName} at ${serverUrl}`);
  }
  
  public async executeTool(request: MCPToolRequest): Promise<MCPToolResponse> {
    const { tool, inputs, context, metadata } = request;
    
    const toolDefinition = this.tools.get(tool);
    if (!toolDefinition) {
      return this.createErrorResponse(tool, 'tool_not_found', `Tool '${tool}' not found`);
    }
    
    const executionId = uuidv4();
    const startTime = new Date().toISOString();
    
    // Log execution start
    const execution: MCPToolExecution = {
      id: executionId,
      toolName: tool,
      agentId: metadata?.agentId || 'unknown',
      inputs,
      status: 'in-progress',
      startTime,
    };
    
    this.executionsHistory.push(execution);
    
    try {
      // Validate inputs based on schema
      const validationError = this.validateInputs(inputs, toolDefinition);
      if (validationError) {
        this.updateExecution(executionId, {
          status: 'failed',
          error: validationError.message,
          endTime: new Date().toISOString()
        });
        return this.createErrorResponse(tool, 'invalid_inputs', validationError.message);
      }
      
      // Mock implementation - in a real world scenario, this would call the appropriate server
      // or local implementation based on the tool name
      console.log(`[MCP Host] Executing tool: ${tool} with inputs:`, inputs);
      
      // Get server URL for the tool
      const serverUrl = this.toolServers.get(tool);
      
      // Simulate tool execution - in a real implementation, this would make the actual call
      // to the tool server or local implementation
      const outputs = await this.simulateToolExecution(tool, inputs, serverUrl);
      
      // Apply guardrails to outputs
      const filteredOutputs = this.applyOutputFilters(outputs, toolDefinition);
      
      const endTime = new Date().toISOString();
      const latency = new Date(endTime).getTime() - new Date(startTime).getTime();
      
      // Update execution record
      this.updateExecution(executionId, {
        status: 'completed',
        outputs: filteredOutputs,
        endTime,
        metrics: {
          latencyMs: latency,
          confidence: 0.95 // Mock confidence score
        }
      });
      
      return {
        tool,
        outputs: filteredOutputs,
        status: 'success',
        metrics: {
          latency,
          confidence: 0.95 // Mock confidence score
        }
      };
    } catch (error) {
      console.error(`[MCP Host] Error executing tool ${tool}:`, error);
      
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      // Update execution record
      this.updateExecution(executionId, {
        status: 'failed',
        error: errorMessage,
        endTime: new Date().toISOString()
      });
      
      // Check if guardrails specify fallback message
      const fallbackMessage = toolDefinition.guardrails?.fallbackMessage;
      
      return this.createErrorResponse(
        tool, 
        'execution_error', 
        errorMessage,
        fallbackMessage ? { fallback_message: fallbackMessage } : undefined
      );
    }
  }
  
  public listTools(): MCPToolDefinition[] {
    return Array.from(this.tools.values());
  }
  
  public getTool(toolName: string): MCPToolDefinition | null {
    return this.tools.get(toolName) || null;
  }
  
  public getExecutionsHistory(): MCPToolExecution[] {
    return [...this.executionsHistory];
  }
  
  public getToolAnalytics(toolName: string, timeframe: 'day' | 'week' | 'month' = 'week'): any {
    const executions = this.executionsHistory.filter(e => e.toolName === toolName);
    
    const total = executions.length;
    if (total === 0) return { toolName, totalCalls: 0, successRate: 0 };
    
    const successful = executions.filter(e => e.status === 'completed').length;
    const failed = executions.filter(e => e.status === 'failed').length;
    const escalated = executions.filter(e => e.status === 'escalated').length;
    
    const latencies = executions
      .filter(e => e.metrics?.latencyMs)
      .map(e => e.metrics!.latencyMs);
    
    const avgLatency = latencies.length > 0
      ? latencies.reduce((sum, val) => sum + val, 0) / latencies.length
      : 0;
    
    // Group by agent
    const byAgent = executions.reduce((acc, curr) => {
      const agentId = curr.agentId;
      acc[agentId] = (acc[agentId] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      toolName,
      totalCalls: total,
      successRate: (successful / total) * 100,
      errorRate: (failed / total) * 100,
      escalationRate: (escalated / total) * 100,
      averageLatency: avgLatency,
      usageByAgent: byAgent
    };
  }
  
  private validateInputs(inputs: Record<string, any>, toolDefinition: MCPToolDefinition): Error | null {
    // Mock validation - in a real implementation, this would validate against the schema
    return null;
  }
  
  private applyOutputFilters(outputs: Record<string, any>, toolDefinition: MCPToolDefinition): Record<string, any> {
    // Apply any output filters defined in guardrails
    if (!toolDefinition.guardrails?.outputFilters) {
      return outputs;
    }
    
    const filtered = { ...outputs };
    const filters = toolDefinition.guardrails.outputFilters;
    
    for (const [key, filter] of Object.entries(filters)) {
      if (key in outputs) {
        filtered[key] = filter(outputs[key]);
      }
    }
    
    return filtered;
  }
  
  private updateExecution(id: string, updates: Partial<MCPToolExecution>): void {
    const index = this.executionsHistory.findIndex(e => e.id === id);
    if (index !== -1) {
      this.executionsHistory[index] = {
        ...this.executionsHistory[index],
        ...updates
      };
    }
  }
  
  private createErrorResponse(
    tool: string, 
    code: string, 
    message: string,
    details?: any
  ): MCPToolResponse {
    return {
      tool,
      outputs: {},
      status: 'error',
      error: {
        code,
        message,
        details
      }
    };
  }
  
  // Mock implementation for tool execution
  private async simulateToolExecution(
    toolName: string, 
    inputs: Record<string, any>,
    serverUrl?: string
  ): Promise<Record<string, any>> {
    // In a real implementation, this would call the appropriate server
    // or local implementation based on the tool name
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock responses based on tool name
    switch (toolName) {
      case 'create_ticket':
        return {
          ticket_id: `TKT-${Math.floor(Math.random() * 10000)}`,
          status: 'open',
          created_at: new Date().toISOString()
        };
        
      case 'schedule_appointment':
        return {
          appointment_id: `APT-${Math.floor(Math.random() * 10000)}`,
          scheduled_time: new Date(Date.now() + 86400000).toISOString(),
          provider: 'Dr. Smith'
        };
        
      case 'fetch_patient_summary':
        return {
          patient_name: inputs.patient_name || 'John Doe',
          age: 45,
          recent_visits: 2,
          active_medications: ['Lisinopril', 'Metformin']
        };
        
      default:
        return { result: 'success', message: `Executed ${toolName}` };
    }
  }
}

export default MCPHostService.getInstance();
