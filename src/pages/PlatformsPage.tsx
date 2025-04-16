
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlatformSimulator } from '@/components/platform-integration/PlatformSimulator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AgentType, PlatformType } from '@/lib/agent-integration/types';

const PlatformsPage = () => {
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
              <BreadcrumbPage>Connected Platforms</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div>
          <h1 className="text-3xl font-bold">Connected Platforms</h1>
          <p className="text-muted-foreground mt-1">
            View and interact with agents in their respective platforms.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Platform Integration</CardTitle>
            <CardDescription>
              Each AI agent is embedded in a separate front-end platform. All data syncs back to Isabella in GHS Agent Command.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Architecture Overview</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Each platform has its own agent service connected to a large language model and vector database</li>
                <li>Performance metrics, logs, and conversations are synced back to Isabella via API</li>
                <li>Updates to training, escalation rules, or personality are broadcasted to all connected platforms</li>
                <li>Isabella exists only in GHS Agent Command for admin-level use</li>
              </ul>
            </div>
            
            <Tabs defaultValue="ihealth-sync">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ihealth-sync">iHealth-Sync</TabsTrigger>
                <TabsTrigger value="nurse-sync">Nurse-Sync</TabsTrigger>
                <TabsTrigger value="medic-sync">Medic-Sync</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ihealth-sync" className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">iHealth-Sync Platform</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Client-facing application for elderly users and family members to manage health monitoring.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                      <li>User-friendly interface optimized for elderly access</li>
                      <li>Medication reminders and health monitoring</li>
                      <li>Device setup and troubleshooting assistance</li>
                      <li>Family dashboard for caregiver oversight</li>
                    </ul>
                  </div>
                  <PlatformSimulator agentType="anna" platformType="ihealth-sync" />
                </div>
              </TabsContent>
              
              <TabsContent value="nurse-sync" className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Nurse-Sync Platform</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Professional application for nurses to manage care plans and client information.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                      <li>Care plan creation and management tools</li>
                      <li>Client health tracking and visit scheduling</li>
                      <li>Medical reference materials and protocols</li>
                      <li>Training modules and certification tracking</li>
                    </ul>
                  </div>
                  <PlatformSimulator agentType="emma" platformType="nurse-sync" />
                </div>
              </TabsContent>
              
              <TabsContent value="medic-sync" className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Medic-Sync Platform</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Clinical application for doctors and healthcare professionals.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
                      <li>Patient records and treatment history</li>
                      <li>Documentation assistance and medical summarization</li>
                      <li>Clinical decision support resources</li>
                      <li>Secure healthcare professional messaging</li>
                    </ul>
                  </div>
                  <PlatformSimulator agentType="julia" platformType="medic-sync" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PlatformsPage;
