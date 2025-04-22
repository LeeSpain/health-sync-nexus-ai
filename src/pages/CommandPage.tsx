
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CommandConsole } from '@/components/dashboard/CommandConsole';
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

const CommandPage = () => {
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
              <BreadcrumbPage>{t.sidebar.main.command}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{t.sidebar.main.command}</h1>
        </div>
        
        <p className="text-muted-foreground">
          {language === 'en' 
            ? "Control your GHS Agent Command system with text or voice commands. Isabella will process your requests and coordinate with other agents."
            : language === 'es'
              ? "Controle su sistema GHS Agent Command con comandos de texto o voz. Isabella procesará sus solicitudes y coordinará con otros agentes."
              : "Beheer uw GHS Agent Command-systeem met tekst- of spraakopdrachten. Isabella verwerkt uw verzoeken en coördineert met andere agenten."}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <CommandConsole />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CommandPage;
