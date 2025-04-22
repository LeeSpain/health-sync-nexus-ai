
import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CommandConsole } from '@/components/dashboard/CommandConsole';
import { SystemStats } from '@/components/dashboard/SystemStats';
import { FinancialOverview } from '@/components/dashboard/FinancialOverview';
import { useEmailService } from '@/hooks/use-email-service';
import { useTicketService } from '@/hooks/use-ticket-service';
import { EmailAnalytics } from '@/lib/email-system/types';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { AgentStatusSection } from '@/components/dashboard/AgentStatusSection';
import { StatsCards } from '@/components/dashboard/StatsCards';

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
          
          <RecentActivity />
        </div>
        
        <FinancialOverview />
        
        <StatsCards emailStats={emailStats} ticketCount={ticketCount} />
        
        <AgentStatusSection />
      </div>
    </DashboardLayout>
  );
};

export default Index;
