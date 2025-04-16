
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

const AgentsPage = () => {
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
              <BreadcrumbPage>Agent Management</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Agent Management</h1>
        </div>
        
        <p className="text-muted-foreground">
          Configure, train, and monitor all GHS agents in your network. Adjust agent settings and behaviors.
        </p>
        
        <div className="bg-card border rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-medium mb-2">Agent Configuration</h3>
          <p className="text-muted-foreground text-center max-w-md mb-6">
            This page will display detailed agent configuration options for Anna, Emma, and Julia,
            including personality settings, voice configuration, and knowledge base management.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentsPage;
