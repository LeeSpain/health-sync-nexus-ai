
import { 
  MCPClient, 
  MCPToolDefinition, 
  MCPToolRequest, 
  MCPToolResponse 
} from './types';
import MCPHostService from './mcp-host';

/**
 * MCP Client implementation for agents
 * Allows agents to discover and call tools via the MCP protocol
 */
export class MCPClientService implements MCPClient {
  private static instance: MCPClientService;
  private host: MCPHostService;
  private agentId: string;
  
  private constructor(agentId: string) {
    this.host = MCPHostService.getInstance();
    this.agentId = agentId;
  }
  
  public static getInstance(agentId: string): MCPClientService {
    if (!MCPClientService.instance) {
      MCPClientService.instance = new MCPClientService(agentId);
    }
    return MCPClientService.instance;
  }
  
  public async discoverTools(): Promise<MCPToolDefinition[]> {
    console.log(`[MCP Client: ${this.agentId}] Discovering available tools`);
    return this.host.listTools();
  }
  
  public async callTool(request: MCPToolRequest): Promise<MCPToolResponse> {
    // Ensure the request has metadata with the agent ID
    const enrichedRequest: MCPToolRequest = {
      ...request,
      metadata: {
        ...request.metadata,
        agentId: this.agentId,
        timestamp: new Date().toISOString()
      }
    };
    
    console.log(`[MCP Client: ${this.agentId}] Calling tool: ${request.tool}`);
    return this.host.executeTool(enrichedRequest);
  }
  
  public setAgentId(agentId: string): void {
    this.agentId = agentId;
  }
}

// Factory function to create clients for different agents
export function createMCPClient(agentId: string): MCPClient {
  return MCPClientService.getInstance(agentId);
}
