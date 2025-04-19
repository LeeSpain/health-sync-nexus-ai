
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AgentType } from '@/lib/agent-integration/types';
import { Brain, Zap, Database, Globe, MessageSquare } from 'lucide-react';

interface AgentIntelligenceProps {
  agentType: AgentType;
}

export function AgentIntelligence({ agentType }: AgentIntelligenceProps) {
  // Define intelligence capabilities based on agent type
  const getAgentCapabilities = (type: AgentType) => {
    switch(type) {
      case 'anna':
        return {
          nlp: 80,
          reasoning: 65,
          memory: 70,
          integration: 85,
          conversation: 90,
          description: "Wellness focused with patient-centered conversational abilities"
        };
      case 'emma':
        return {
          nlp: 85,
          reasoning: 75,
          memory: 80,
          integration: 75,
          conversation: 85,
          description: "Nursing expertise with clinical reasoning capabilities"
        };
      case 'julia':
        return {
          nlp: 90,
          reasoning: 90,
          memory: 85,
          integration: 65,
          conversation: 75,
          description: "Advanced medical reasoning with evidence-based processing"
        };
      case 'isabella':
        return {
          nlp: 95,
          reasoning: 95,
          memory: 90,
          integration: 95,
          conversation: 90,
          description: "Command-level oversight with strategic coordination abilities"
        };
    }
  };

  const capabilities = getAgentCapabilities(agentType);

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">Intelligence Profile</CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-800">
            AI Capabilities
          </Badge>
        </div>
        <CardDescription>{capabilities.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium">NLP Understanding</span>
            </div>
            <span className="text-sm">{capabilities.nlp}%</span>
          </div>
          <Progress value={capabilities.nlp} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">Reasoning</span>
            </div>
            <span className="text-sm">{capabilities.reasoning}%</span>
          </div>
          <Progress value={capabilities.reasoning} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Memory & Recall</span>
            </div>
            <span className="text-sm">{capabilities.memory}%</span>
          </div>
          <Progress value={capabilities.memory} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium">System Integration</span>
            </div>
            <span className="text-sm">{capabilities.integration}%</span>
          </div>
          <Progress value={capabilities.integration} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-rose-500" />
              <span className="text-sm font-medium">Conversation</span>
            </div>
            <span className="text-sm">{capabilities.conversation}%</span>
          </div>
          <Progress value={capabilities.conversation} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t text-xs text-muted-foreground">
        Intelligence profiles are continuously updated based on agent performance
      </CardFooter>
    </Card>
  );
}
