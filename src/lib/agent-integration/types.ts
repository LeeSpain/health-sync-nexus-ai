
export type AgentType = 'anna' | 'emma' | 'julia' | 'isabella';
export type PlatformType = 'ihealth-sync' | 'nurse-sync' | 'medic-sync' | 'command';

export interface AgentPerformanceMetrics {
  conversationsCount: number;
  averageResponseTime: number;
  sentimentScore: number;
  topTopic: string;
  escalationCount: number;
  successfulResolutions: number;
}

export interface AgentPersonality {
  tone: string;
  style: string;
  communication: string;
}

export interface AgentConfiguration {
  id: string;
  name: string;
  type: AgentType;
  platform: PlatformType;
  personality: AgentPersonality;
  knowledgeBaseId: string;
  isActive: boolean;
  escalatesTo: AgentType | null;
}

export interface AgentConversation {
  id: string;
  agentId: string;
  userId: string;
  startedAt: string;
  endedAt?: string;
  messages: AgentMessage[];
  escalatedTo?: string;
  escalationReason?: string;
}

export interface AgentMessage {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: string;
  sentiment?: number;
}

export interface AgentCommand {
  type: 'update_personality' | 'update_knowledge' | 'update_escalation_rules' | 'activate' | 'deactivate';
  targetAgent: AgentType;
  payload: any;
  issuedBy: 'isabella';
  timestamp: string;
}

export interface AgentSyncEvent {
  type: 'metrics' | 'conversation' | 'escalation';
  agentId: string;
  platform: PlatformType;
  timestamp: string;
  data: AgentPerformanceMetrics | AgentConversation | any;
}
