
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { useTicketService } from '@/hooks/use-ticket-service';
import { Ticket } from '@/lib/ticket-system/types';
import { Ticket as TicketIcon, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { getAllTickets, createTicket } = useTicketService();
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  const handleLoadTickets = async () => {
    const loadedTickets = await getAllTickets();
    setTickets(loadedTickets);
  };

  const handleCreateTicket = async () => {
    const newTicket = await createTicket({
      subject: language === 'en' ? 'New Support Request' : language === 'es' ? 'Nueva Solicitud de Soporte' : 'Nieuw Ondersteuningsverzoek',
      description: language === 'en' ? 'Initial ticket description' : language === 'es' ? 'Descripción inicial del ticket' : 'Initiële ticketbeschrijving',
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
          <h1 className="text-3xl font-bold">{t.sidebar.main.tickets}</h1>
          <div className="flex gap-2">
            <Button onClick={handleLoadTickets} variant="outline">
              {language === 'en' ? 'Load Tickets' : language === 'es' ? 'Cargar Tickets' : 'Tickets Laden'}
            </Button>
            <Button onClick={handleCreateTicket}>
              <Plus className="h-4 w-4 mr-2" /> 
              {language === 'en' ? 'Create Ticket' : language === 'es' ? 'Crear Ticket' : 'Ticket Aanmaken'}
            </Button>
          </div>
        </div>

        {tickets.length === 0 ? (
          <div className="text-center py-8">
            <TicketIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p>
              {language === 'en' 
                ? "No tickets found. Click 'Create Ticket' to get started."
                : language === 'es'
                  ? "No se encontraron tickets. Haga clic en 'Crear Ticket' para comenzar."
                  : "Geen tickets gevonden. Klik op 'Ticket Aanmaken' om te beginnen."}
            </p>
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
                      {ticket.priority === 'critical' 
                        ? (language === 'en' ? 'Critical' : language === 'es' ? 'Crítico' : 'Kritiek')
                        : ticket.priority === 'high'
                          ? (language === 'en' ? 'High' : language === 'es' ? 'Alto' : 'Hoog')
                          : ticket.priority === 'medium'
                            ? (language === 'en' ? 'Medium' : language === 'es' ? 'Medio' : 'Gemiddeld')
                            : (language === 'en' ? 'Low' : language === 'es' ? 'Bajo' : 'Laag')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{ticket.description}</p>
                  <div className="mt-2 flex justify-between">
                    <Badge variant="secondary">
                      {ticket.status === 'open'
                        ? (language === 'en' ? 'Open' : language === 'es' ? 'Abierto' : 'Open')
                        : ticket.status === 'in-progress'
                          ? (language === 'en' ? 'In Progress' : language === 'es' ? 'En Progreso' : 'In Behandeling')
                          : ticket.status === 'resolved'
                            ? (language === 'en' ? 'Resolved' : language === 'es' ? 'Resuelto' : 'Opgelost')
                            : (language === 'en' ? 'Closed' : language === 'es' ? 'Cerrado' : 'Gesloten')}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {language === 'en' ? 'Created' : language === 'es' ? 'Creado' : 'Aangemaakt'}: {new Date(ticket.createdAt).toLocaleDateString()}
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
