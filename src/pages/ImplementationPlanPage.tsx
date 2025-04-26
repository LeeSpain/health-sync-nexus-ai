
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';
import { ImplementationPlanContent } from '@/components/implementation-plan/ImplementationPlanContent';

const ImplementationPlanPage = () => {
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
              <BreadcrumbPage>
                {language === "en" ? "Implementation Plan" : 
                 language === "es" ? "Plan de Implementación" : 
                 "Implementatieplan"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {language === "en" ? "GHS Command CRM Implementation Plan" : 
             language === "es" ? "Plan de Implementación CRM de GHS Command" : 
             "GHS Command CRM Implementatieplan"}
          </h1>
        </div>
        
        <ImplementationPlanContent />
      </div>
    </DashboardLayout>
  );
};

export default ImplementationPlanPage;
