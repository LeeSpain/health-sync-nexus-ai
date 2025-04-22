
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

const ConversationsPage = () => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t.dashboard}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t.sidebar.main.conversations}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{t.sidebar.main.conversations}</h1>
        </div>
        
        <p className="text-muted-foreground">
          {language === 'en' 
            ? "Review and analyze all agent conversations across platforms. Filter by agent, sentiment, or topic."
            : language === 'es'
              ? "Revise y analice todas las conversaciones de agentes en todas las plataformas. Filtre por agente, sentimiento o tema."
              : "Bekijk en analyseer alle agentgesprekken op alle platforms. Filter op agent, sentiment of onderwerp."}
        </p>
        
        <div className="bg-card border rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h3 className="text-xl font-medium mb-2">
            {language === 'en' 
              ? "Conversation Analysis"
              : language === 'es'
                ? "Análisis de Conversación"
                : "Gespreksanalyse"}
          </h3>
          <p className="text-muted-foreground text-center max-w-md mb-6">
            {language === 'en' 
              ? "This page will display all agent conversations with filtering capabilities, sentiment analysis, and escalation tracking."
              : language === 'es'
                ? "Esta página mostrará todas las conversaciones de agentes con capacidades de filtrado, análisis de sentimiento y seguimiento de escaladas."
                : "Deze pagina toont alle agentgesprekken met filtermogelijkheden, sentimentanalyse en escalatietracking."}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConversationsPage;
