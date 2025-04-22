
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
import { AgentList } from '@/components/agents/AgentList';
import { AgentDetail } from '@/components/agents/AgentDetail';
import { AgentFilters } from '@/components/agents/AgentFilters';
import { Button } from '@/components/ui/button';
import { Plus, Settings } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

const AgentsPage = () => {
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
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
                {language === 'en' ? "Agent Management" : language === 'es' ? "Gestión de Agentes" : "Agent Beheer"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {language === 'en' ? "Agent Management" : language === 'es' ? "Gestión de Agentes" : "Agent Beheer"}
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              {language === 'en' ? "Advanced Settings" : language === 'es' ? "Configuración Avanzada" : "Geavanceerde Instellingen"}
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              {language === 'en' ? "New Agent" : language === 'es' ? "Nuevo Agente" : "Nieuwe Agent"}
            </Button>
          </div>
        </div>
        
        <p className="text-muted-foreground">
          {language === 'en' 
            ? "Configure, train, and monitor all GHS agents in your network. Adjust agent settings and behaviors."
            : language === 'es'
              ? "Configure, entrene y supervise todos los agentes GHS en su red. Ajuste la configuración y los comportamientos de los agentes."
              : "Configureer, train en monitor alle GHS-agenten in uw netwerk. Pas agentinstellingen en -gedrag aan."}
        </p>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">
                {language === 'en' ? "All Agents" : language === 'es' ? "Todos los Agentes" : "Alle Agenten"}
              </TabsTrigger>
              <TabsTrigger value="active">
                {language === 'en' ? "Active" : language === 'es' ? "Activos" : "Actief"}
              </TabsTrigger>
              <TabsTrigger value="inactive">
                {language === 'en' ? "Inactive" : language === 'es' ? "Inactivos" : "Inactief"}
              </TabsTrigger>
              <TabsTrigger value="training">
                {language === 'en' ? "In Training" : language === 'es' ? "En Entrenamiento" : "In Training"}
              </TabsTrigger>
            </TabsList>
            
            <AgentFilters />
          </div>
          
          <Separator className="my-4" />
          
          <TabsContent value="all" className="mt-0">
            <div className="grid lg:grid-cols-[1fr_300px] gap-6">
              <AgentList onSelectAgent={setSelectedAgentId} selectedAgentId={selectedAgentId} />
              {selectedAgentId && (
                <AgentDetail agentId={selectedAgentId} />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="active" className="mt-0">
            <div className="grid lg:grid-cols-[1fr_300px] gap-6">
              <AgentList onSelectAgent={setSelectedAgentId} selectedAgentId={selectedAgentId} status="active" />
              {selectedAgentId && (
                <AgentDetail agentId={selectedAgentId} />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="inactive" className="mt-0">
            <div className="grid lg:grid-cols-[1fr_300px] gap-6">
              <AgentList onSelectAgent={setSelectedAgentId} selectedAgentId={selectedAgentId} status="inactive" />
              {selectedAgentId && (
                <AgentDetail agentId={selectedAgentId} />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="mt-0">
            <div className="grid lg:grid-cols-[1fr_300px] gap-6">
              <AgentList onSelectAgent={setSelectedAgentId} selectedAgentId={selectedAgentId} status="training" />
              {selectedAgentId && (
                <AgentDetail agentId={selectedAgentId} />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AgentsPage;
