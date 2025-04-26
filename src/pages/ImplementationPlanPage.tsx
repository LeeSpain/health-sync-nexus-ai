
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
import { ImplementationPlanContent } from '@/components/implementation-plan/ImplementationPlanContent';

const ImplementationPlanPage = () => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  // Translations for page title
  const pageTitle = {
    en: "GHS Command CRM",
    es: "CRM de GHS Command",
    nl: "GHS Command CRM"
  };

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
              <BreadcrumbPage>
                {pageTitle[language] || pageTitle.en}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <ImplementationPlanContent />
      </div>
    </DashboardLayout>
  );
};

export default ImplementationPlanPage;
