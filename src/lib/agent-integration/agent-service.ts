
import { AgentCommand, AgentConfiguration, AgentSyncEvent, AgentType, PlatformType } from './types';

// This would be replaced with actual API calls in a real implementation
const mockApiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class AgentService {
  private static instance: AgentService;
  private agentConfigurations: Record<AgentType, AgentConfiguration>;
  
  private constructor() {
    // Initialize with default configurations
    this.agentConfigurations = {
      anna: {
        id: '1',
        name: 'Anna',
        type: 'anna',
        platform: 'ihealth-sync',
        personality: {
          tone: 'Gentle, warm, emotionally supportive',
          style: 'Conversational and accessible',
          communication: 'Simple explanations with reminders'
        },
        knowledgeBaseId: 'kb-anna-001',
        isActive: true,
        escalatesTo: 'emma'
      },
      emma: {
        id: '2',
        name: 'Emma',
        type: 'emma',
        platform: 'nurse-sync',
        personality: {
          tone: 'Reassuring, focused, professional',
          style: 'Efficient and detail-oriented',
          communication: 'Clear instructions with medical context'
        },
        knowledgeBaseId: 'kb-emma-001',
        isActive: true,
        escalatesTo: 'julia'
      },
      julia: {
        id: '3',
        name: 'Julia',
        type: 'julia',
        platform: 'medic-sync',
        personality: {
          tone: 'Clear, efficient, no-nonsense',
          style: 'Technical and precise',
          communication: 'Medical terminology with evidence-based insights'
        },
        knowledgeBaseId: 'kb-julia-001',
        isActive: true,
        escalatesTo: null
      },
      isabella: {
        id: '4',
        name: 'Isabella',
        type: 'isabella',
        platform: 'command',
        personality: {
          tone: 'Calm, wise, strategic',
          style: 'Analytical and oversight-focused',
          communication: 'System-level insights and recommendations'
        },
        knowledgeBaseId: 'kb-isabella-001',
        isActive: true,
        escalatesTo: null
      }
    };
  }

  public static getInstance(): AgentService {
    if (!AgentService.instance) {
      AgentService.instance = new AgentService();
    }
    return AgentService.instance;
  }

  // Methods for GHS Command (Isabella) to manage agents
  
  public async getAgentConfiguration(agentType: AgentType): Promise<AgentConfiguration> {
    await mockApiDelay(500);
    return this.agentConfigurations[agentType];
  }
  
  public async getAllAgentConfigurations(): Promise<AgentConfiguration[]> {
    await mockApiDelay(500);
    return Object.values(this.agentConfigurations);
  }
  
  public async updateAgentConfiguration(agentType: AgentType, updates: Partial<AgentConfiguration>): Promise<AgentConfiguration> {
    await mockApiDelay(800);
    
    // In a real implementation, this would send updates to the respective platform
    this.agentConfigurations[agentType] = {
      ...this.agentConfigurations[agentType],
      ...updates
    };
    
    // Create a command to update across platforms
    const command: AgentCommand = {
      type: 'update_personality',
      targetAgent: agentType,
      payload: updates,
      issuedBy: 'isabella',
      timestamp: new Date().toISOString()
    };
    
    await this.broadcastCommand(command);
    
    return this.agentConfigurations[agentType];
  }
  
  private async broadcastCommand(command: AgentCommand): Promise<void> {
    // This would send the command to the appropriate platform API
    console.log(`Broadcasting command to ${command.targetAgent}:`, command);
    await mockApiDelay(600);
  }
  
  // Methods for platforms to sync data back to GHS Command
  
  public async syncAgentMetrics(event: AgentSyncEvent): Promise<void> {
    // This would be called by platforms to sync data back to Isabella
    console.log(`Received sync event from ${event.agentId} on ${event.platform}:`, event);
    await mockApiDelay(700);
    // In a real implementation, this would store the data for Isabella to access
  }
  
  public async reportEscalation(fromAgent: AgentType, toAgent: AgentType, reason: string, conversationId: string): Promise<void> {
    console.log(`Escalation from ${fromAgent} to ${toAgent}:`, reason);
    await mockApiDelay(600);
    // In a real implementation, this would trigger notifications and updates
  }
}

export default AgentService.getInstance();
