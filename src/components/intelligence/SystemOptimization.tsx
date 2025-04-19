
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gauge, Brain, ArrowUpRight } from 'lucide-react';

export function SystemOptimization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gauge className="mr-2 h-5 w-5 text-blue-500" />
          System Performance
        </CardTitle>
        <CardDescription>
          AI system performance metrics and optimization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Response Accuracy</span>
            <Badge variant="outline" className="bg-green-50 text-green-700">94.8%</Badge>
          </div>
          <Progress value={94.8} className="h-2" />
          <p className="text-xs text-muted-foreground">Based on user feedback and validation</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Average Response Time</span>
            <Badge variant="outline">1.2 seconds</Badge>
          </div>
          <Progress value={85} className="h-2" />
          <p className="text-xs text-muted-foreground">15% faster than previous month</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Knowledge Coverage</span>
            <Badge variant="outline">92.3%</Badge>
          </div>
          <Progress value={92.3} className="h-2" />
          <p className="text-xs text-muted-foreground">Percentage of questions successfully answered</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Escalation Rate</span>
            <Badge variant="outline" className="bg-amber-50 text-amber-700">7.2%</Badge>
          </div>
          <Progress value={7.2} className="h-2" />
          <p className="text-xs text-muted-foreground">Percentage of conversations requiring human intervention</p>
        </div>
      </CardContent>
    </Card>
  );
}
