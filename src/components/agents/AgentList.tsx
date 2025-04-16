
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Play, Pause, BarChart2, MessageSquare } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AgentAvatar } from './AgentAvatar';

export type AgentStatus = 'active' | 'inactive' | 'training';

type Agent = {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  description: string;
  tone: string;
  conversationsToday: number;
  topTopic: string;
  sentiment: number;
  color: string;
};

type AgentListProps = {
  onSelectAgent: (id: string) => void;
  selectedAgentId: string | null;
  status?: AgentStatus;
};

// Sample agent data
const agents: Agent[] = [
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
    color: '#FEF3C7', // Ivory
  }
];

export const AgentList: React.FC<AgentListProps> = ({ 
  onSelectAgent, 
  selectedAgentId,
  status
}) => {
  const filteredAgents = status 
    ? agents.filter(agent => agent.status === status)
    : agents;

  return (
    <ScrollArea className="h-[calc(100vh-320px)]">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredAgents.map((agent) => (
          <Card 
            key={agent.id}
            className={`cursor-pointer transition-all border-l-4 hover:shadow-md ${
              selectedAgentId === agent.id ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}
            style={{ borderLeftColor: agent.color }}
            onClick={() => onSelectAgent(agent.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <AgentAvatar name={agent.name} color={agent.color} />
                  <div>
                    <CardTitle>{agent.name}</CardTitle>
                    <CardDescription className="line-clamp-1">{agent.role}</CardDescription>
                  </div>
                </div>
                <Badge variant={agent.status === 'active' ? 'default' : agent.status === 'inactive' ? 'secondary' : 'outline'}>
                  {agent.status === 'active' ? 'Active' : agent.status === 'inactive' ? 'Inactive' : 'Training'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm line-clamp-2 text-muted-foreground mb-3">{agent.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Today's conversations</p>
                  <p className="font-medium">{agent.conversationsToday}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Top topic</p>
                  <p className="font-medium line-clamp-1">{agent.topTopic}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Sentiment score</p>
                  <p className="font-medium">{agent.sentiment}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Tone</p>
                  <p className="font-medium line-clamp-1">{agent.tone}</p>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-2 justify-between">
              <div className="flex space-x-1">
                <Button size="icon" variant="ghost">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <BarChart2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex space-x-1">
                <Button size="icon" variant="ghost">
                  {agent.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button size="icon" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};
