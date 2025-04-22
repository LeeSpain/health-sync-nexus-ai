
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Check, Clock, ArrowUpRight } from 'lucide-react';

export function MCPStatusCard() {
  // Implementation progress tracking
  const implementationSteps = [
    { name: 'MCP Core Architecture', complete: true, progress: 100 },
    { name: 'Isabella as MCP Host', complete: true, progress: 100 },
    { name: 'Tool Definitions', complete: true, progress: 100 },
    { name: 'Agent Integration', complete: true, progress: 100 },
    { name: 'Guard Rails', complete: true, progress: 100 },
    { name: 'Analytics', complete: true, progress: 100 },
    { name: 'Tool Server Implementation', complete: false, progress: 60 },
    { name: 'Agent Prompt Integration', complete: false, progress: 40 }
  ];
  
  const overallProgress = implementationSteps.reduce((acc, step) => acc + step.progress, 0) / implementationSteps.length;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5 text-indigo-500" />
          MCP Implementation Status
        </CardTitle>
        <CardDescription>
          Model Context Protocol integration progress
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm">{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
        
        <div className="space-y-3">
          {implementationSteps.map((step, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {step.complete ? (
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <Clock className="h-4 w-4 text-amber-500 mr-2" />
                )}
                <span className="text-sm">{step.name}</span>
              </div>
              <Badge 
                variant={step.complete ? "default" : "outline"}
                className={step.complete ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
              >
                {step.complete ? 'Complete' : `${step.progress}%`}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="pt-2 mt-2 border-t">
          <div className="flex items-start gap-2">
            <ArrowUpRight className="h-4 w-4 text-blue-500 mt-0.5" />
            <div className="text-xs text-muted-foreground">
              <p>
                The MCP architecture is now in place, with Isabella functioning as the MCP host. 
                All agents can access tools via standardized interfaces for consistent integration 
                with any LLM provider.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
