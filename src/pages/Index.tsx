
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AgentCard } from '@/components/dashboard/AgentCard';
import { CommandConsole } from '@/components/dashboard/CommandConsole';
import { SystemStats } from '@/components/dashboard/SystemStats';
import { FinancialOverview } from '@/components/dashboard/FinancialOverview';
import { useEmailService } from '@/hooks/use-email-service';
import { useTicketService } from '@/hooks/use-ticket-service';
import { EmailAnalytics } from '@/lib/email-system/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Ticket, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";

const Index = () => {
  const [emailStats, setEmailStats] = useState<EmailAnalytics | null>(null);
  const [ticketCount, setTicketCount] = useState({ total: 0, open: 0 });
  const { getEmailAnalytics } = useEmailService();
  const { getAllTickets } = useTicketService();

  // Fetch email and ticket stats on load
  useEffect(() => {
    const fetchStats = async () => {
      const emailAnalytics = await getEmailAnalytics();
      if (emailAnalytics) {
        setEmailStats(emailAnalytics);
      }
      
      const tickets = await getAllTickets();
      setTicketCount({
        total: tickets.length,
        open: tickets.filter(t => t.status !== 'resolved' && t.status !== 'closed').length
      });
    };
    
    fetchStats();
  }, []);

  // Mock data for agent cards
  const agentData = [
    {
      name: "Anna",
      role: "Wellness Assistant (iHealth-Sync)",
      type: "anna" as const,
      activeConversations: 15,
      sentiment: 85,
      escalations: 0,
      topTopics: ["Wellness Check-in", "Device Setup", "Appointment Booking"]
    },
    {
      name: "Emma",
      role: "Nurse Assistant (Nurse-Sync)",
      type: "emma" as const,
      activeConversations: 8,
      sentiment: 72,
      escalations: 3,
      topTopics: ["Care Plans", "Training", "Support Questions"]
    },
    {
      name: "Julia",
      role: "Medical Assistant (Medic-Sync)",
      type: "julia" as const,
      activeConversations: 12,
      sentiment: 79,
      escalations: 1,
      topTopics: ["Patient Notes", "Documentation", "Care Suggestions"]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">GHS Command Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>

        <SystemStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <CommandConsole />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">New wellness check-in alerts</p>
                  <span className="text-xs text-muted-foreground">16 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Nurse training completion</p>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Emma escalated support issue</p>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Julia updated medical protocols</p>
                  <span className="text-xs text-muted-foreground">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add Financial Overview Section */}
        <FinancialOverview />
        
        {/* Communication Systems Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email System Card */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Management
                </CardTitle>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  Active
                </Badge>
              </div>
              <CardDescription>
                Manage all email communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{emailStats?.openThreads || 0}</p>
                  <p className="text-xs text-muted-foreground">Open</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{emailStats?.resolvedThreads || 0}</p>
                  <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{emailStats?.escalatedThreads || 0}</p>
                  <p className="text-xs text-muted-foreground">Escalated</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/emails">
                  <Mail className="mr-2 h-4 w-4" />
                  View Emails
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Ticket System Card */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Ticket className="h-5 w-5" />
                  Ticket Management
                </CardTitle>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Active
                </Badge>
              </div>
              <CardDescription>
                Track and manage support tickets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{ticketCount.open}</p>
                  <p className="text-xs text-muted-foreground">Open Tickets</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{ticketCount.total}</p>
                  <p className="text-xs text-muted-foreground">Total Tickets</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/tickets">
                  <Ticket className="mr-2 h-4 w-4" />
                  View Tickets
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Agent Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agentData.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
