
export type EmailStatus = 'unread' | 'assigned' | 'in-progress' | 'waiting' | 'resolved' | 'escalated';

export type EmailPriority = 'low' | 'medium' | 'high' | 'critical';

export interface EmailAttachment {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url: string;
}

export interface EmailMessage {
  id: string;
  threadId: string;
  subject: string;
  from: {
    email: string;
    name: string;
  };
  to: string[];
  cc?: string[];
  bcc?: string[];
  body: string;
  sentAt: string;
  receivedAt?: string;
  readAt?: string;
  attachments?: EmailAttachment[];
}

export interface EmailThread {
  id: string;
  subject: string;
  messages: EmailMessage[];
  status: EmailStatus;
  priority: EmailPriority;
  assignedTo?: string; // Agent ID
  assignedBy?: string; // Agent ID (usually Isabella)
  assignedAt?: string;
  clientEmail: string;
  clientName: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  category?: string;
  lastMessageAt: string;
  closedAt?: string;
  closedBy?: string;
  notes?: string;
  escalationReason?: string;
  sentiment?: number; // -1 to 1 score
}

export interface EmailAnalytics {
  totalThreads: number;
  openThreads: number;
  resolvedThreads: number;
  escalatedThreads: number;
  averageResponseTime: number; // in minutes
  averageResolutionTime: number; // in minutes
  threadsByAgent: Record<string, number>;
  threadsByCategory: Record<string, number>;
  threadsByStatus: Record<EmailStatus, number>;
}
