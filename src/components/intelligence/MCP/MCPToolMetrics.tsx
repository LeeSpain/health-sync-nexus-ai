
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Terminal, Check, X, AlertTriangle, ArrowUpRight } from 'lucide-react';

interface MCPToolMetricsProps {
  toolName: string;
  analytics: any;
}

export function MCPToolMetrics({ toolName, analytics }: MCPToolMetricsProps) {
  if (!analytics || analytics.totalCalls === 0) {
    return (
      <Card className="bg-card border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Terminal className="h-4 w-4 text-indigo-500 mr-2" />
            <h3 className="text-sm font-medium">{toolName}</h3>
          </div>
          <Badge variant="outline">No Data</Badge>
        </div>
      </Card>
    );
  }
  
  const {
    totalCalls,
    successRate,
    errorRate,
    escalationRate,
    averageLatency,
    usageByAgent
  } = analytics;
  
  return (
    <Card className="bg-card border p-4">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Terminal className="h-4 w-4 text-indigo-500 mr-2" />
            <h3 className="text-sm font-medium">{toolName}</h3>
          </div>
          <Badge variant="outline">
            {totalCalls} {totalCalls === 1 ? 'Call' : 'Calls'}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="flex items-center">
                <Check className="h-3 w-3 text-green-500 mr-1" />
                Success Rate
              </span>
              <span>{successRate.toFixed(1)}%</span>
            </div>
            <Progress value={successRate} className="h-1.5" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="flex items-center">
                <X className="h-3 w-3 text-red-500 mr-1" />
                Error Rate
              </span>
              <span>{errorRate.toFixed(1)}%</span>
            </div>
            <Progress value={errorRate} className="h-1.5" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="flex items-center">
                <AlertTriangle className="h-3 w-3 text-amber-500 mr-1" />
                Escalation Rate
              </span>
              <span>{escalationRate.toFixed(1)}%</span>
            </div>
            <Progress value={escalationRate} className="h-1.5" />
          </div>
          
          <div className="mt-3 pt-3 border-t">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Average Latency:</span>
              <span>{averageLatency.toFixed(0)}ms</span>
            </div>
            
            <h4 className="text-xs font-medium mb-1">Usage by Agent</h4>
            <div className="space-y-1">
              {Object.entries(usageByAgent).map(([agent, count]) => (
                <div key={agent} className="flex justify-between text-xs">
                  <span>{agent}</span>
                  <span>{count} calls</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
