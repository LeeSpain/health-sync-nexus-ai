
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ActivitySquare, Users, GitMerge, AlertTriangle } from 'lucide-react';

export function SystemStats() {
  const stats = [
    {
      title: "Total Conversations",
      value: "342",
      change: "+12%",
      icon: ActivitySquare,
      trend: "up",
    },
    {
      title: "Active Users",
      value: "78",
      change: "+5%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Escalations",
      value: "14",
      change: "-3%",
      icon: GitMerge,
      trend: "down",
    },
    {
      title: "Critical Alerts",
      value: "3",
      change: "+1",
      icon: AlertTriangle,
      trend: "up",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="ghs-card animate-enter" style={{animationDelay: `${index * 100}ms`}}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
