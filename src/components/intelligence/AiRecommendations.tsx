
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Brain } from 'lucide-react';

export function AiRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
          AI Recommendations
        </CardTitle>
        <CardDescription>
          System-generated insights and suggestions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-3 rounded-lg border bg-card">
            <h4 className="font-medium text-sm">Knowledge Base Update Needed</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Recent conversations indicate outdated information about the new diabetes treatment protocol.
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="text-xs h-7">Update Knowledge Base</Button>
            </div>
          </div>
          
          <div className="p-3 rounded-lg border bg-card">
            <h4 className="font-medium text-sm">Response Optimization</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Responses about insurance coverage could be improved with more specific details.
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="text-xs h-7">View Suggestions</Button>
            </div>
          </div>
          
          <div className="p-3 rounded-lg border bg-card">
            <h4 className="font-medium text-sm">Training Opportunity</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Adding more examples of appointment rescheduling scenarios could improve handling.
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="text-xs h-7">Add Training Data</Button>
            </div>
          </div>
          
          <div className="p-3 rounded-lg border bg-indigo-50">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-indigo-500" />
              <h4 className="font-medium text-sm text-indigo-900">MCP Integration Benefits</h4>
            </div>
            <p className="text-xs text-indigo-700 mt-1">
              The new MCP architecture allows for easier tool extensibility and model interoperability.
              Tools can now be added without modifying agent code.
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="text-xs h-7 border-indigo-300 text-indigo-700 hover:text-indigo-800 hover:bg-indigo-100">
                <Zap className="mr-1 h-3 w-3" />
                View MCP Tools
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
