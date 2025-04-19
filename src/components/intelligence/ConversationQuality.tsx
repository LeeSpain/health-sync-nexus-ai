
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from 'lucide-react';

export function ConversationQuality() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
          Conversation Quality
        </CardTitle>
        <CardDescription>
          Qualitative analysis of conversation effectiveness
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="text-sm font-medium">Top Performing Responses</span>
            <div className="space-y-2">
              <div className="p-2 rounded-md bg-muted text-xs">
                <div className="font-medium mb-1">Medication Explanation</div>
                <p className="text-muted-foreground">Clear explanation of medication dosage and potential side effects</p>
                <div className="mt-1 flex justify-between">
                  <Badge variant="outline" className="text-xs">98% helpful</Badge>
                  <span className="text-muted-foreground">Used 128 times</span>
                </div>
              </div>
              
              <div className="p-2 rounded-md bg-muted text-xs">
                <div className="font-medium mb-1">Appointment Scheduling</div>
                <p className="text-muted-foreground">Efficient process for scheduling follow-up appointments</p>
                <div className="mt-1 flex justify-between">
                  <Badge variant="outline" className="text-xs">95% helpful</Badge>
                  <span className="text-muted-foreground">Used 87 times</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <span className="text-sm font-medium">Areas for Improvement</span>
            <div className="space-y-2">
              <div className="p-2 rounded-md border border-amber-200 bg-amber-50 text-xs">
                <div className="font-medium mb-1 text-amber-800">Insurance Explanations</div>
                <p className="text-amber-700">Responses about insurance coverage could be more detailed</p>
                <div className="mt-1">
                  <Badge variant="outline" className="text-xs bg-amber-100 text-amber-800">72% helpful</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
