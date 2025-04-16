
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Activity, AlertCircle, ChevronRight } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export interface AgentCardProps {
  name: string;
  role: string;
  type: 'anna' | 'emma' | 'julia' | 'isabella';
  activeConversations: number;
  sentiment: number;
  escalations: number;
  topTopics: string[];
}

export function AgentCard({
  name,
  role,
  type,
  activeConversations,
  sentiment,
  escalations,
  topTopics
}: AgentCardProps) {
  // Get color classes based on agent type
  const getColorClass = () => {
    switch (type) {
      case 'anna':
        return 'ghs-card-anna';
      case 'emma':
        return 'ghs-card-emma';
      case 'julia':
        return 'ghs-card-julia';
      case 'isabella':
        return 'ghs-card-isabella';
      default:
        return '';
    }
  };

  // Get background gradient based on agent type
  const getGradientClass = () => {
    switch (type) {
      case 'anna':
        return 'agent-gradient-anna';
      case 'emma':
        return 'agent-gradient-emma';
      case 'julia':
        return 'agent-gradient-julia';
      default:
        return 'bg-gradient-to-r from-amber-300 to-amber-500';
    }
  };

  // Get sentiment color
  const getSentimentColor = () => {
    if (sentiment >= 75) return 'bg-green-500';
    if (sentiment >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className={`ghs-card ${getColorClass()} animate-enter`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full ${getGradientClass()} flex items-center justify-center text-white font-bold`}>
                {name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          </div>
          <Badge variant={escalations > 0 ? "destructive" : "secondary"} className="text-xs">
            {escalations > 0 ? `${escalations} Escalations` : 'No Escalations'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Active Conversations</span>
            </div>
            <span className="font-medium">{activeConversations}</span>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Activity className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Sentiment Score</span>
              </div>
              <span className="font-medium">{sentiment}%</span>
            </div>
            <Progress value={sentiment} className={getSentimentColor()} />
          </div>
          
          {topTopics.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Top Topics</p>
              <div className="flex flex-wrap gap-1">
                {topTopics.map((topic, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="w-full justify-between">
          <span>View Details</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
