import { AgentType } from '../agent-integration/types';
import { Ticket, TicketStatus, TicketPriority, TicketMessage, TicketAnalytics } from './types';
import NotificationService from '../notification/notification-service';

export class TicketService {
  private static instance: TicketService;
  private tickets: Ticket[] = [];

  private constructor() {}

  public static getInstance(): TicketService {
    if (!TicketService.instance) {
      TicketService.instance = new TicketService();
    }
    return TicketService.instance;
  }

  public async getAllTickets(): Promise<Ticket[]> {
    return [...this.tickets];
  }

  public async getTicketById(ticketId: string): Promise<Ticket | null> {
    return this.tickets.find(t => t.id === ticketId) || null;
  }

  public async createTicket(ticketData: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>): Promise<Ticket> {
    const newTicket: Ticket = {
      id: `ticket_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...ticketData
    };
    
    this.tickets.push(newTicket);
    
    // Add notification for new ticket
    NotificationService.addNotification(
      'New Ticket Created',
      `Ticket ${newTicket.subject} has been created`,
      ticketData.priority === 'critical' ? 'critical' : 'high',
      'ticket',
      `/tickets/${newTicket.id}`
    );
    
    return newTicket;
  }

  public async updateTicketStatus(ticketId: string, status: TicketStatus): Promise<Ticket | null> {
    const ticketIndex = this.tickets.findIndex(t => t.id === ticketId);
    if (ticketIndex === -1) return null;

    this.tickets[ticketIndex] = {
      ...this.tickets[ticketIndex],
      status,
      updatedAt: new Date().toISOString()
    };

    // Add notification for status change
    if (status === 'escalated') {
      NotificationService.addNotification(
        'Ticket Escalated',
        `Ticket ${this.tickets[ticketIndex].subject} has been escalated`,
        'high',
        'escalation',
        `/tickets/${ticketId}`
      );
    }

    return this.tickets[ticketIndex];
  }

  public async addTicketMessage(ticketId: string, message: Omit<TicketMessage, 'id'>): Promise<Ticket | null> {
    const ticketIndex = this.tickets.findIndex(t => t.id === ticketId);
    if (ticketIndex === -1) return null;

    const newMessage: TicketMessage = {
      id: `msg_${Date.now()}`,
      ...message
    };

    this.tickets[ticketIndex] = {
      ...this.tickets[ticketIndex],
      messages: [...this.tickets[ticketIndex].messages, newMessage],
      updatedAt: new Date().toISOString()
    };

    return this.tickets[ticketIndex];
  }

  public async getTicketAnalytics(): Promise<TicketAnalytics> {
    return {
      totalTickets: this.tickets.length,
      openTickets: this.tickets.filter(t => t.status !== 'resolved' && t.status !== 'closed').length,
      resolvedTickets: this.tickets.filter(t => t.status === 'resolved').length,
      averageResolutionTime: 0 // TODO: Implement actual calculation
    };
  }
}

export default TicketService.getInstance();
