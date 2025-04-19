
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, MessageSquare } from 'lucide-react';

export function ConversationAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart3 className="mr-2 h-5 w-5 text-indigo-500" />
          Conversation Analytics
        </CardTitle>
        <CardDescription>
          Detailed metrics on conversation performance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <span className="text-sm font-medium">Conversation Volume by Hour</span>
          <div className="h-24 flex items-end gap-1">
            {[15, 25, 35, 45, 65, 55, 40, 50, 60, 35, 30, 20, 25, 30, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10].map((value, i) => (
              <div 
                key={i} 
                className="flex-1 bg-primary/80 rounded-t-sm" 
                style={{ height: `${value}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>12 AM</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <span className="text-sm font-medium">Conversation Metrics</span>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Avg. Conversation Length</span>
                <span className="font-medium">4.2 min</span>
              </div>
              <Progress value={70} className="h-1.5" />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>First Response Time</span>
                <span className="font-medium">8 sec</span>
              </div>
              <Progress value={90} className="h-1.5" />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Resolution Rate</span>
                <span className="font-medium">92%</span>
              </div>
              <Progress value={92} className="h-1.5" />
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>User Satisfaction</span>
                <span className="font-medium">4.8/5</span>
              </div>
              <Progress value={96} className="h-1.5" />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <span className="text-sm font-medium">Agent Performance Comparison</span>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs">Anna</span>
              <Progress value={88} className="h-1.5 flex-1" />
              <span className="text-xs font-medium">88%</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="text-xs">Emma</span>
              <Progress value={92} className="h-1.5 flex-1" />
              <span className="text-xs font-medium">92%</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-xs">Julia</span>
              <Progress value={95} className="h-1.5 flex-1" />
              <span className="text-xs font-medium">95%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
