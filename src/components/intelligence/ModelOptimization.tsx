
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowUpRight } from 'lucide-react';

export function ModelOptimization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5 text-purple-500" />
          AI Model Optimization
        </CardTitle>
        <CardDescription>
          Fine-tuning and model improvement metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
            <ArrowUpRight className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Recent Model Improvements</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Latest fine-tuning improved medical terminology accuracy by 12%
              </p>
              <div className="mt-2">
                <Badge variant="outline" className="text-xs mr-1">Medical Terms</Badge>
                <Badge variant="outline" className="text-xs mr-1">Symptom Recognition</Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <span className="text-sm font-medium">Training Progress</span>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-2 rounded-full bg-green-500"></div>
              <div className="h-2 rounded-full bg-green-500"></div>
              <div className="h-2 rounded-full bg-green-500"></div>
              <div className="h-2 rounded-full bg-muted"></div>
            </div>
            <p className="text-xs text-muted-foreground">Phase 3/4 complete - Final optimization in progress</p>
          </div>
          
          <div className="space-y-2">
            <span className="text-sm font-medium">Knowledge Base Updates</span>
            <div className="text-xs text-muted-foreground">
              <div className="flex justify-between mb-1">
                <span>New medical procedures</span>
                <span>Added 2 days ago</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Updated insurance information</span>
                <span>Added 5 days ago</span>
              </div>
              <div className="flex justify-between">
                <span>New medication guidelines</span>
                <span>Added 1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
