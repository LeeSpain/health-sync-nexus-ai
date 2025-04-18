
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed' | 'escalated';
export type TicketPriority = 'low' | 'medium' | 'high' | 'critical';

export interface TicketMessage {
  id: string;
  ticketId: string;
  from: {
    email: string;
    name: string;
  };
  body: string;
  sentAt: string;
}

export interface Ticket {
  id: string;
  subject: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  messages: TicketMessage[];
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  clientEmail: string;
  clientName: string;
  tags: string[];
}

export interface TicketAnalytics {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
}
