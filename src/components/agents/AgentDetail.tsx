
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BarChart, 
  Brain,
  FileText, 
  Mic, 
  MessageSquare, 
  Settings2,
  Users
} from 'lucide-react';
import { AgentAvatar } from './AgentAvatar';

type AgentDetailProps = {
  agentId: string;
};

// Sample agent data (same as in AgentList.tsx)
const agents = [
  {
    id: '1',
    name: 'Anna',
    role: 'Frontline AI for wellness users',
    status: 'active',
    description: 'Handles daily wellness check-ins, device setup help, and booking calls.',
    tone: 'Gentle, warm, emotionally supportive',
    conversationsToday: 87,
    topTopic: 'Medication reminders',
    sentiment: 92,
    color: '#A390E4', // Lilac
    voiceModel: 'Eleven Labs - Sarah',
    knowledgeBase: '5,432 entries',
    reportsTo: 'Emma',
    escalatesTo: 'Emma',
    languages: ['English', 'Spanish'],
  },
  {
    id: '2',
    name: 'Emma',
    role: 'AI companion for nurses',
    status: 'active',
    description: 'Handles clock-in workflows, care plans, training prompts, and support questions.',
    tone: 'Reassuring, focused, professional',
    conversationsToday: 56,
    topTopic: 'Patient care plans',
    sentiment: 85,
    color: '#10B981', // Emerald Green
    voiceModel: 'Eleven Labs - Laura',
    knowledgeBase: '8,723 entries',
    reportsTo: 'Julia',
    escalatesTo: 'Julia',
    languages: ['English', 'Spanish', 'French'],
  },
  {
    id: '3',
    name: 'Julia',
    role: 'Assistant to doctors and medical staff',
    status: 'active',
    description: 'Summarizes patient notes, assists with documentation, and provides care suggestions.',
    tone: 'Clear, efficient, no-nonsense',
    conversationsToday: 42,
    topTopic: 'Documentation assistance',
    sentiment: 78,
    color: '#60A5FA', // Sky Blue
    voiceModel: 'Eleven Labs - Alice',
    knowledgeBase: '12,571 entries',
    reportsTo: 'Isabella',
    escalatesTo: 'Isabella',
    languages: ['English', 'Spanish'],
  },
  {
    id: '4',
    name: 'Isabella',
    role: 'Core intelligence, admin-only control panel AI',
    status: 'active',
    description: 'Oversees and trains the other agents, providing strategic insights to the admin.',
    tone: 'Calm, wise, strategic',
    conversationsToday: 12,
    topTopic: 'Agent performance analysis',
    sentiment: 95,
    color: '#FEF3C7', // Ivory with Gold
    voiceModel: 'Eleven Labs - Aria',
    knowledgeBase: '25,874 entries',
    reportsTo: 'Admin Only',
    escalatesTo: 'None',
    languages: ['English', 'Spanish', 'French', 'German'],
  }
];

export const AgentDetail: React.FC<AgentDetailProps> = ({ agentId }) => {
  const agent = agents.find(a => a.id === agentId);
  
  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <Card className="h-[calc(100vh-320px)]">
      <CardHeader className="pb-2 sticky top-0 bg-card z-10">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg">Agent Details</CardTitle>
          <Badge variant={agent.status === 'active' ? 'default' : agent.status === 'inactive' ? 'secondary' : 'outline'}>
            {agent.status === 'active' ? 'Active' : agent.status === 'inactive' ? 'Inactive' : 'Training'}
          </Badge>
        </div>
        <div className="flex items-center gap-3 mb-1">
          <AgentAvatar name={agent.name} color={agent.color} size="lg" />
          <div>
            <h3 className="font-bold text-xl">{agent.name}</h3>
            <p className="text-sm text-muted-foreground">{agent.role}</p>
          </div>
        </div>
      </CardHeader>
      
      <Tabs defaultValue="overview" className="px-1">
        <TabsList className="grid grid-cols-3 mb-2 mx-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="voice">Voice & Language</TabsTrigger>
        </TabsList>
        
        <ScrollArea className="h-[calc(100vh-450px)]">
          <TabsContent value="overview" className="mt-0">
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm">Description</h4>
                <p className="text-sm text-muted-foreground">{agent.description}</p>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm">Conversations Today</h4>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{agent.conversationsToday}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Top Topic</h4>
                  <p className="text-sm">{agent.topTopic}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Sentiment Score</h4>
                  <div className="flex items-center">
                    <BarChart className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{agent.sentiment}%</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Reports To</h4>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{agent.reportsTo}</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-sm mb-2">Quick Actions</h4>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">View Conversations</Button>
                  <Button size="sm" variant="outline">Edit Prompt</Button>
                  <Button size="sm" variant="outline">Analytics</Button>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="config" className="mt-0">
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm">Personality Tone</h4>
                <p className="text-sm text-muted-foreground">{agent.tone}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-sm">Knowledge Base</h4>
                <div className="flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{agent.knowledgeBase}</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-sm">Escalation Path</h4>
                <p className="text-sm text-muted-foreground">
                  Escalates to: <span className="font-medium">{agent.escalatesTo}</span>
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-sm mb-2">Configuration Options</h4>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Edit Prompts
                  </Button>
                  <Button size="sm" variant="outline">
                    <Brain className="h-4 w-4 mr-2" />
                    Knowledge Base
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings2 className="h-4 w-4 mr-2" />
                    Advanced Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="voice" className="mt-0">
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm">Voice Model</h4>
                <div className="flex items-center">
                  <Mic className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{agent.voiceModel}</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-sm">Supported Languages</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {agent.languages.map(language => (
                    <Badge key={language} variant="outline">{language}</Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-sm mb-2">Voice Configuration</h4>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">
                    <Mic className="h-4 w-4 mr-2" />
                    Test Voice
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings2 className="h-4 w-4 mr-2" />
                    Voice Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </Card>
  );
};
