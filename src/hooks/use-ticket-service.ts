
import { useState } from 'react';
import ticketService from '@/lib/ticket-system/ticket-service';
import { Ticket, TicketStatus, TicketPriority } from '@/lib/ticket-system/types';
import { toast } from 'sonner';

export function useTicketService() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllTickets = async () => {
    setLoading(true);
    setError(null);
    try {
      const tickets = await ticketService.getAllTickets();
      setLoading(false);
      return tickets;
    } catch (err) {
      setError('Failed to fetch tickets');
      setLoading(false);
      toast.error('Error fetching tickets');
      return [];
    }
  };

  const createTicket = async (ticketData: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => {
    setLoading(true);
    setError(null);
    try {
      const ticket = await ticketService.createTicket(ticketData);
      setLoading(false);
      toast.success('Ticket created successfully');
      return ticket;
    } catch (err) {
      setError('Failed to create ticket');
      setLoading(false);
      toast.error('Error creating ticket');
      return null;
    }
  };

  const updateTicketStatus = async (ticketId: string, status: TicketStatus) => {
    setLoading(true);
    setError(null);
    try {
      const updatedTicket = await ticketService.updateTicketStatus(ticketId, status);
      setLoading(false);
      if (updatedTicket) {
        toast.success(`Ticket status updated to ${status}`);
      }
      return updatedTicket;
    } catch (err) {
      setError('Failed to update ticket status');
      setLoading(false);
      toast.error('Error updating ticket status');
      return null;
    }
  };

  return {
    loading,
    error,
    getAllTickets,
    createTicket,
    updateTicketStatus
  };
}
