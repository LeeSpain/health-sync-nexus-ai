
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function SystemHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Health</CardTitle>
        <CardDescription>
          Current status of AI systems and integrations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Natural Language Processing</span>
              <Badge variant="outline" className="bg-green-50 text-green-700">Operational</Badge>
            </div>
            <Progress value={100} className="h-1.5 bg-green-100" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Knowledge Base Sync</span>
              <Badge variant="outline" className="bg-green-50 text-green-700">Operational</Badge>
            </div>
            <Progress value={100} className="h-1.5 bg-green-100" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Voice Processing</span>
              <Badge variant="outline" className="bg-green-50 text-green-700">Operational</Badge>
            </div>
            <Progress value={100} className="h-1.5 bg-green-100" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">EHR Integration</span>
              <Badge variant="outline" className="bg-amber-50 text-amber-700">Partial Outage</Badge>
            </div>
            <Progress value={65} className="h-1.5 bg-amber-100" />
            <p className="text-xs text-muted-foreground">Scheduled maintenance until 2:00 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
