
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, MessageSquare } from 'lucide-react';

export function ConversationIntelligence() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5 text-yellow-500" />
          Conversation Intelligence
        </CardTitle>
        <CardDescription>
          AI-powered insights from customer conversations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Sentiment Analysis</span>
            <Badge variant="outline" className="bg-green-50 text-green-700">Positive</Badge>
          </div>
          <Progress value={72} className="h-2" />
          <p className="text-xs text-muted-foreground">72% positive sentiment across conversations</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Topic Detection</span>
            <Badge variant="outline">5 Key Topics</Badge>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
              <span>Medication Questions</span>
              <span className="font-medium">32%</span>
            </div>
            <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
              <span>Appointment Scheduling</span>
              <span className="font-medium">28%</span>
            </div>
            <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
              <span>Insurance Coverage</span>
              <span className="font-medium">18%</span>
            </div>
            <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
              <span>Test Results</span>
              <span className="font-medium">12%</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Intent Recognition</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Information Seeking</span>
              <span>45%</span>
            </div>
            <Progress value={45} className="h-1.5" />
            
            <div className="flex justify-between text-xs">
              <span>Problem Resolution</span>
              <span>30%</span>
            </div>
            <Progress value={30} className="h-1.5" />
            
            <div className="flex justify-between text-xs">
              <span>Scheduling</span>
              <span>15%</span>
            </div>
            <Progress value={15} className="h-1.5" />
            
            <div className="flex justify-between text-xs">
              <span>Complaints</span>
              <span>10%</span>
            </div>
            <Progress value={10} className="h-1.5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
