
export type AgentType = 'anna' | 'emma' | 'julia' | 'isabella';
export type PlatformType = 'ihealth-sync' | 'nurse-sync' | 'medic-sync' | 'command';
export type AgentStatus = 'active' | 'inactive' | 'training';

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
  
  // UI display properties (added to fix errors)
  status?: AgentStatus;
  role?: string;
  description?: string;
  conversationsToday?: number;
  topTopic?: string;
  sentiment?: number;
  color?: string;
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

// Base interface for all sync events
export interface AgentSyncEventBase {
  agentId: string;
  platform: PlatformType;
  timestamp: string;
}

// Specific sync event types
export interface AgentMetricsSyncEvent extends AgentSyncEventBase {
  type: 'metrics';
  data: AgentPerformanceMetrics & {
    customMetrics?: Record<string, number | string>;
    status?: AgentStatus;
    notes?: string;
  };
}

export interface AgentConversationSyncEvent extends AgentSyncEventBase {
  type: 'conversation';
  data: AgentConversation;
}

export interface AgentEscalationSyncEvent extends AgentSyncEventBase {
  type: 'escalation';
  data: {
    fromAgent: AgentType;
    toAgent: AgentType;
    reason: string;
    conversationId: string;
    details?: string;
  };
}

// Union type that can be any of the specific event types
export type AgentSyncEvent = AgentMetricsSyncEvent | AgentConversationSyncEvent | AgentEscalationSyncEvent;
