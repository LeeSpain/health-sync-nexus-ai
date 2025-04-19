
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, AlertCircle, Sparkles, Lightbulb } from 'lucide-react';

export function EmergingPatterns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
          Emerging Patterns
        </CardTitle>
        <CardDescription>
          Newly detected trends and patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
            <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Increasing Interest in Preventative Care</h4>
              <p className="text-xs text-muted-foreground mt-1">
                25% increase in questions about preventative health measures over the last month.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Medication Side Effect Concerns</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Spike in questions about side effects for recently prescribed medications.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
            <Sparkles className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">New Treatment Interest</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Growing questions about new treatment options mentioned in recent news.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
