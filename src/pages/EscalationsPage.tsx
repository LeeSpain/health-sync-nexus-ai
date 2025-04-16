
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

const EscalationsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Escalation Rules</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Escalation Rules</h1>
        </div>
        
        <p className="text-muted-foreground">
          Configure the escalation path between agents and set triggers for automatic handoffs between team members.
        </p>
        
        <div className="bg-card border rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-xl font-medium mb-2">Escalation Workflow</h3>
          <p className="text-muted-foreground text-center max-w-md mb-6">
            This page will display the visual flow of escalations between Anna, Emma, and Julia,
            with configurable triggers and conditions for automatic handoffs.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EscalationsPage;
