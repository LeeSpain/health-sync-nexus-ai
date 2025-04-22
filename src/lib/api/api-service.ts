
import { AgentType, AgentConfiguration, AgentSyncEvent } from '../agent-integration/types';
import agentService from '../agent-integration/agent-service';
import MCPHostService from '../mcp/mcp-host';
import { MCPToolRequest, MCPToolResponse } from '../mcp/types';
import { createMCPClient } from '../mcp/mcp-client';
import NotificationService from '../notification/notification-service';

/**
 * API Service for GHS Command
 * 
 * This service provides the API implementation for external platforms
 * to interact with GHS Command.
 */
export class APIService {
  private static instance: APIService;
  private authTokens: Map<string, { token: string; expiresAt: Date }> = new Map();
  
  private constructor() {}
  
  public static getInstance(): APIService {
    if (!APIService.instance) {
      APIService.instance = new APIService();
    }
    return APIService.instance;
  }
  
  // Agent API methods
  
  public async getAgentConfigurations(): Promise<AgentConfiguration[]> {
    return await agentService.getAllAgentConfigurations();
  }
  
  public async getAgentConfiguration(agentType: AgentType): Promise<AgentConfiguration> {
    return await agentService.getAgentConfiguration(agentType);
  }
  
  public async updateAgentConfiguration(
    agentType: AgentType, 
    updates: Partial<AgentConfiguration>
  ): Promise<AgentConfiguration> {
    return await agentService.updateAgentConfiguration(agentType, updates);
  }
  
  // Event Synchronization API methods
  
  public async syncEvent(event: AgentSyncEvent): Promise<{ success: boolean; message: string; eventId: string }> {
    try {
      await agentService.syncAgentMetrics(event);
      
      // Add notification for important events
      if (event.type === 'escalation') {
        NotificationService.addNotification(
          'Escalation Event',
          `Escalation from ${event.agentId} on ${event.platform}`,
          'high',
          'escalation',
          '/escalations'
        );
      }
      
      return {
        success: true,
        message: 'Event synchronized successfully',
        eventId: `evt_${Date.now()}`
      };
    } catch (error) {
      console.error('Error syncing event:', error);
      throw new Error('Failed to sync event');
    }
  }
  
  public async reportEscalation(
    fromAgent: AgentType,
    toAgent: AgentType,
    reason: string,
    conversationId: string
  ): Promise<{ success: boolean; message: string; escalationId: string }> {
    try {
      await agentService.reportEscalation(fromAgent, toAgent, reason, conversationId);
      
      // Add notification for the escalation
      NotificationService.addNotification(
        'New Escalation',
        `Escalation from ${fromAgent} to ${toAgent}: ${reason}`,
        'high',
        'escalation',
        '/escalations'
      );
      
      return {
        success: true,
        message: 'Escalation recorded successfully',
        escalationId: `esc_${Date.now()}`
      };
    } catch (error) {
      console.error('Error reporting escalation:', error);
      throw new Error('Failed to report escalation');
    }
  }
  
  // MCP API methods
  
  public async getAvailableTools(): Promise<any[]> {
    return MCPHostService.listTools();
  }
  
  public async executeTool(
    toolRequest: MCPToolRequest
  ): Promise<MCPToolResponse> {
    try {
      // Ensure agentId is provided in the metadata
      if (!toolRequest.metadata?.agentId) {
        throw new Error('Agent ID is required in metadata');
      }
      
      // Get MCP client for the agent
      const mcpClient = createMCPClient(toolRequest.metadata.agentId as AgentType);
      
      // Execute the tool
      return await mcpClient.callTool(toolRequest);
    } catch (error) {
      console.error('Error executing tool:', error);
      throw new Error('Failed to execute tool');
    }
  }
  
  // Authentication API methods
  
  public generateToken(
    platformId: string,
    apiKey: string
  ): { token: string; expiresAt: string; platformId: string } {
    // In a real implementation, this would validate the API key against a database
    // and generate a proper JWT token with appropriate signing
    
    // Mock implementation for demonstration
    if (apiKey.startsWith('apk_')) {
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
      const token = `mock_jwt_token_${platformId}_${Date.now()}`;
      
      this.authTokens.set(platformId, { token, expiresAt });
      
      return {
        token,
        expiresAt: expiresAt.toISOString(),
        platformId
      };
    } else {
      throw new Error('Invalid API key');
    }
  }
  
  public refreshToken(
    platformId: string,
    currentToken: string
  ): { token: string; expiresAt: string; platformId: string } {
    // In a real implementation, this would validate the current token
    // and generate a new one if valid
    
    // Mock implementation for demonstration
    const tokenInfo = this.authTokens.get(platformId);
    
    if (tokenInfo && tokenInfo.token === currentToken) {
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
      const newToken = `mock_jwt_token_${platformId}_${Date.now()}`;
      
      this.authTokens.set(platformId, { token: newToken, expiresAt });
      
      return {
        token: newToken,
        expiresAt: expiresAt.toISOString(),
        platformId
      };
    } else {
      throw new Error('Invalid or expired token');
    }
  }
  
  public validateToken(token: string): boolean {
    // In a real implementation, this would validate the JWT signature
    // and check if it's expired
    
    // Mock implementation for demonstration
    for (const [_, tokenInfo] of this.authTokens.entries()) {
      if (tokenInfo.token === token && tokenInfo.expiresAt > new Date()) {
        return true;
      }
    }
    
    return false;
  }
}

export default APIService.getInstance();
