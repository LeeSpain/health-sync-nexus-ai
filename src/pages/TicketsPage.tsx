
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { useTicketService } from '@/hooks/use-ticket-service';
import { Ticket } from '@/lib/ticket-system/types';
import { Ticket as TicketIcon, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { getAllTickets, createTicket } = useTicketService();

  const handleLoadTickets = async () => {
    const loadedTickets = await getAllTickets();
    setTickets(loadedTickets);
  };

  const handleCreateTicket = async () => {
    const newTicket = await createTicket({
      subject: 'New Support Request',
      description: 'Initial ticket description',
      status: 'open',
      priority: 'medium',
      messages: [],
      clientEmail: 'user@example.com',
      clientName: 'Test User',
      tags: ['support']
    });

    if (newTicket) {
      setTickets([...tickets, newTicket]);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tickets</h1>
          <div className="flex gap-2">
            <Button onClick={handleLoadTickets} variant="outline">
              Load Tickets
            </Button>
            <Button onClick={handleCreateTicket}>
              <Plus className="h-4 w-4 mr-2" /> Create Ticket
            </Button>
          </div>
        </div>

        {tickets.length === 0 ? (
          <div className="text-center py-8">
            <TicketIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p>No tickets found. Click 'Create Ticket' to get started.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tickets.map(ticket => (
              <Card key={ticket.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{ticket.subject}</h3>
                    <Badge variant="outline" className={
                      ticket.priority === 'critical' ? 'bg-red-100 text-red-800' :
                      ticket.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }>
                      {ticket.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{ticket.description}</p>
                  <div className="mt-2 flex justify-between">
                    <Badge variant="secondary">{ticket.status}</Badge>
                    <span className="text-sm text-muted-foreground">
                      Created: {new Date(ticket.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TicketsPage;
