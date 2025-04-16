
import React, { useEffect, useState } from 'react';
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
import { Edit, Trash2, Play, Pause, BarChart2, MessageSquare, Zap } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AgentAvatar } from './AgentAvatar';
import { useAgentService } from '@/hooks/use-agent-service';
import { AgentConfiguration, AgentType, PlatformType } from '@/lib/agent-integration/types';
import { toast } from 'sonner';

export type AgentStatus = 'active' | 'inactive' | 'training';

type AgentListProps = {
  onSelectAgent: (id: string) => void;
  selectedAgentId: string | null;
  status?: AgentStatus;
};

export const AgentList: React.FC<AgentListProps> = ({ 
  onSelectAgent, 
  selectedAgentId,
  status
}) => {
  const [agents, setAgents] = useState<AgentConfiguration[]>([]);
  const { loading, error, getAllAgentConfigs, updateAgentConfig } = useAgentService();
  
  useEffect(() => {
    loadAgents();
  }, []);
  
  const loadAgents = async () => {
    const configs = await getAllAgentConfigs();
    
    // Transform to work with existing UI
    const transformedAgents = configs.map(config => ({
      ...config,
      role: getPlatformRole(config.platform),
      status: config.isActive ? 'active' as AgentStatus : 'inactive' as AgentStatus,
      description: getPlatformDescription(config.platform),
      tone: config.personality.tone,
      conversationsToday: Math.floor(Math.random() * 100), // Mock data
      topTopic: getTopTopic(config.type),
      sentiment: Math.floor(70 + Math.random() * 30), // Mock data
      color: getAgentColor(config.type),
    }));
    
    setAgents(transformedAgents);
  };
  
  const toggleAgentStatus = async (agent: any) => {
    try {
      const newStatus = agent.status === 'active' ? 'inactive' : 'active';
      await updateAgentConfig(agent.type as AgentType, { 
        isActive: newStatus === 'active'
      });
      
      // Update local state
      setAgents(agents.map(a => {
        if (a.id === agent.id) {
          return { ...a, status: newStatus as AgentStatus };
        }
        return a;
      }));
      
      toast.success(`${agent.name} is now ${newStatus}`);
    } catch (err) {
      toast.error(`Failed to update ${agent.name}'s status`);
    }
  };
  
  // Helper functions
  const getPlatformRole = (platform: PlatformType): string => {
    switch (platform) {
      case 'ihealth-sync': return 'Frontline AI for wellness users';
      case 'nurse-sync': return 'AI companion for nurses';
      case 'medic-sync': return 'Assistant to doctors and medical staff';
      case 'command': return 'Core intelligence, admin-only control panel AI';
      default: return '';
    }
  };
  
  const getPlatformDescription = (platform: PlatformType): string => {
    switch (platform) {
      case 'ihealth-sync': return 'Handles daily wellness check-ins, device setup help, and booking calls.';
      case 'nurse-sync': return 'Handles clock-in workflows, care plans, training prompts, and support questions.';
      case 'medic-sync': return 'Summarizes patient notes, assists with documentation, and provides care suggestions.';
      case 'command': return 'Oversees and trains the other agents, providing strategic insights to the admin.';
      default: return '';
    }
  };
  
  const getTopTopic = (agentType: AgentType): string => {
    switch (agentType) {
      case 'anna': return 'Medication reminders';
      case 'emma': return 'Patient care plans';
      case 'julia': return 'Documentation assistance';
      case 'isabella': return 'Agent performance analysis';
      default: return '';
    }
  };
  
  const getAgentColor = (agentType: AgentType): string => {
    switch (agentType) {
      case 'anna': return '#A390E4'; // Lilac
      case 'emma': return '#10B981'; // Emerald Green
      case 'julia': return '#60A5FA'; // Sky Blue
      case 'isabella': return '#FEF3C7'; // Ivory
      default: return '#CBD5E1';
    }
  };
  
  const filteredAgents = status 
    ? agents.filter(agent => agent.status === status)
    : agents;

  return (
    <ScrollArea className="h-[calc(100vh-320px)]">
      {loading && <div className="flex justify-center p-4">Loading agents...</div>}
      {error && <div className="text-destructive p-4">{error}</div>}
      
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
                <Button size="icon" variant="ghost" title="View conversations">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" title="View analytics">
                  <BarChart2 className="h-4 w-4" />
                </Button>
                {agent.type === 'isabella' && (
                  <Button size="icon" variant="ghost" title="Command Console">
                    <Zap className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="flex space-x-1">
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAgentStatus(agent);
                  }}
                >
                  {agent.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button size="icon" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
                {agent.type !== 'isabella' && (
                  <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};
