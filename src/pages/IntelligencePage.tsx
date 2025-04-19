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
import { AgentIntelligence } from '@/components/agents/AgentIntelligence';
import { PlatformSimulator } from '@/components/platform-integration/PlatformSimulator';
import { AgentType } from '@/lib/agent-integration/types';
import { Brain, Database, Undo2, Zap, Bot, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAgentService } from '@/hooks/use-agent-service';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const IntelligencePage = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentType>('anna');
  const { updateAgentConfig, loading } = useAgentService();
  
  const [settings, setSettings] = useState({
    continuousLearning: true,
    contextWindow: 60,
    reasoningDepth: 75,
    creativityLevel: 40
  });

  const handleSettingChange = (setting: string, value: boolean | number) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleReset = () => {
    setSettings({
      continuousLearning: true,
      contextWindow: 60,
      reasoningDepth: 75,
      creativityLevel: 40
    });
  };

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
              <BreadcrumbPage>Agent Intelligence</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Agent Intelligence</h1>
            <p className="text-muted-foreground mt-1">
              Configure and enhance your agents' cognitive capabilities
            </p>
          </div>
          <Button variant="outline" onClick={handleReset}>
            <Undo2 className="mr-2 h-4 w-4" />
            Reset to Defaults
          </Button>
        </div>

        <Tabs defaultValue="anna" className="w-full" onValueChange={(value) => setSelectedAgent(value as AgentType)}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="anna">Anna</TabsTrigger>
            <TabsTrigger value="emma">Emma</TabsTrigger>
            <TabsTrigger value="julia">Julia</TabsTrigger>
            <TabsTrigger value="isabella">Isabella</TabsTrigger>
          </TabsList>
          
          {['anna', 'emma', 'julia', 'isabella'].map((agent) => (
            <TabsContent key={agent} value={agent} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AgentIntelligence agentType={agent as AgentType} />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Intelligence Settings</CardTitle>
                    <CardDescription>Configure AI behavior and capabilities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="continuous-learning">Continuous Learning</Label>
                        <p className="text-xs text-muted-foreground">Enable agent to learn from interactions</p>
                      </div>
                      <Switch 
                        id="continuous-learning"
                        checked={settings.continuousLearning}
                        onCheckedChange={(checked) => handleSettingChange('continuousLearning', checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Context Window (minutes)</Label>
                          <span className="text-sm">{settings.contextWindow}</span>
                        </div>
                        <Slider 
                          value={[settings.contextWindow]} 
                          min={15} 
                          max={120} 
                          step={5}
                          onValueChange={(value) => handleSettingChange('contextWindow', value[0])}
                        />
                        <p className="text-xs text-muted-foreground">How much conversation history the agent retains</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Reasoning Depth</Label>
                          <span className="text-sm">{settings.reasoningDepth}%</span>
                        </div>
                        <Slider 
                          value={[settings.reasoningDepth]} 
                          min={10} 
                          max={100} 
                          step={5}
                          onValueChange={(value) => handleSettingChange('reasoningDepth', value[0])}
                        />
                        <p className="text-xs text-muted-foreground">Determines complexity of agent's cognitive processing</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Creativity Level</Label>
                          <span className="text-sm">{settings.creativityLevel}%</span>
                        </div>
                        <Slider 
                          value={[settings.creativityLevel]} 
                          min={0} 
                          max={100} 
                          step={5}
                          onValueChange={(value) => handleSettingChange('creativityLevel', value[0])}
                        />
                        <p className="text-xs text-muted-foreground">Controls variation in responses (low for consistency)</p>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full"
                      disabled={loading}
                    >
                      Save Intelligence Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Real-time Evaluation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Agent Knowledge Base</CardTitle>
                      <CardDescription>Specialized information available to agent</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Medical Protocols</span>
                          <Badge variant="outline" className="ml-auto">Core</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Patient Care Guidelines</span>
                          <Badge variant="outline" className="ml-auto">Core</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Wellness Best Practices</span>
                          <Badge variant="outline" className="ml-auto">Extended</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Communication Templates</span>
                          <Badge variant="outline" className="ml-auto">Extended</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Escalation Procedures</span>
                          <Badge variant="outline" className="ml-auto">Core</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <PlatformSimulator 
                    agentType={selectedAgent} 
                    platformType={
                      selectedAgent === 'anna' ? 'ihealth-sync' : 
                      selectedAgent === 'emma' ? 'nurse-sync' : 
                      selectedAgent === 'julia' ? 'medic-sync' : 'command'
                    } 
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default IntelligencePage;
