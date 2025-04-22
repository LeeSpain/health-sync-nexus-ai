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
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

const Index = () => {
  const [emailStats, setEmailStats] = useState<EmailAnalytics | null>(null);
  const [ticketCount, setTicketCount] = useState({ total: 0, open: 0 });
  const { getEmailAnalytics } = useEmailService();
  const { getAllTickets } = useTicketService();

  const { language } = useLanguage();
  const t = dashboardTranslations[language];

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

  // Agent data translations (roles)
  const agentData = [
    {
      name: t.agents.Anna.name,
      role: t.agents.Anna.role,
      type: "anna" as const,
      activeConversations: 15,
      sentiment: 85,
      escalations: 0,
      topTopics: [
        t.wellnessCheck,
        t.financialOverview,
        t.agentStatus
      ]
    },
    {
      name: t.agents.Emma.name,
      role: t.agents.Emma.role,
      type: "emma" as const,
      activeConversations: 8,
      sentiment: 72,
      escalations: 3,
      topTopics: [
        t.nurseTraining,
        t.agentStatus,
        t.recentActivity
      ]
    },
    {
      name: t.agents.Julia.name,
      role: t.agents.Julia.role,
      type: "julia" as const,
      activeConversations: 12,
      sentiment: 79,
      escalations: 1,
      topTopics: [
        t.juliaUpdated,
        t.financialOverview,
        t.recentActivity
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{t.dashboard}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">GHS Command {t.dashboard}</h1>
          <p className="text-sm text-muted-foreground">
            {t.lastUpdated}: {new Date().toLocaleString()}
          </p>
        </div>

        <SystemStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <CommandConsole />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{t.recentActivity}</h2>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">{t.wellnessCheck}</p>
                  <span className="text-xs text-muted-foreground">16 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">{t.nurseTraining}</p>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">{t.emmaEscalated}</p>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">{t.juliaUpdated}</p>
                  <span className="text-xs text-muted-foreground">{language === "en" ? "Yesterday" : language === "es" ? "Ayer" : "Gisteren"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <FinancialOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {t.emails.label}
                </CardTitle>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  {t.emails.active}
                </Badge>
              </div>
              <CardDescription>
                {t.emails.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{emailStats?.openThreads || 0}</p>
                  <p className="text-xs text-muted-foreground">{t.emails.open}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{emailStats?.resolvedThreads || 0}</p>
                  <p className="text-xs text-muted-foreground">{t.emails.resolved}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{emailStats?.escalatedThreads || 0}</p>
                  <p className="text-xs text-muted-foreground">{t.emails.escalated}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/emails">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.emails.view}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Ticket className="h-5 w-5" />
                  {t.tickets.label}
                </CardTitle>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  {t.tickets.active}
                </Badge>
              </div>
              <CardDescription>
                {t.tickets.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{ticketCount.open}</p>
                  <p className="text-xs text-muted-foreground">{t.tickets.open}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{ticketCount.total}</p>
                  <p className="text-xs text-muted-foreground">{t.tickets.total}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/tickets">
                  <Ticket className="mr-2 h-4 w-4" />
                  {t.tickets.view}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">{t.agentStatus}</h2>
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
