
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
import { Button } from "@/components/ui/button";
import { Brain } from 'lucide-react';
import { VoiceControl } from '@/components/voice/VoiceControl';
import { ConversationIntelligence } from '@/components/intelligence/ConversationIntelligence';
import { EmergingPatterns } from '@/components/intelligence/EmergingPatterns';
import { SystemOptimization } from '@/components/intelligence/SystemOptimization';
import { ModelOptimization } from '@/components/intelligence/ModelOptimization';
import { ConversationAnalytics } from '@/components/intelligence/ConversationAnalytics';
import { ConversationQuality } from '@/components/intelligence/ConversationQuality';
import { SystemHealth } from '@/components/intelligence/SystemHealth';
import { AiRecommendations } from '@/components/intelligence/AiRecommendations';

const IntelligencePage = () => {
  const [activeTab, setActiveTab] = useState("insights");
  
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
              <BreadcrumbPage>Intelligence Center</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Intelligence Center</h1>
            <p className="text-muted-foreground mt-1">
              Advanced AI insights, analytics, and optimization tools
            </p>
          </div>
          <Button>
            <Brain className="mr-2 h-4 w-4" />
            Run Analysis
          </Button>
        </div>
        
        <Tabs defaultValue="insights" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="optimization">System Optimization</TabsTrigger>
            <TabsTrigger value="analytics">Advanced Analytics</TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <TabsContent value="insights" className="space-y-4 mt-0">
                <ConversationIntelligence />
                <EmergingPatterns />
              </TabsContent>
              
              <TabsContent value="optimization" className="space-y-4 mt-0">
                <SystemOptimization />
                <ModelOptimization />
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4 mt-0">
                <ConversationAnalytics />
                <ConversationQuality />
              </TabsContent>
            </div>
            
            <div className="space-y-6">
              <VoiceControl agentId="current-agent-id" />
              <AiRecommendations />
              <SystemHealth />
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default IntelligencePage;
