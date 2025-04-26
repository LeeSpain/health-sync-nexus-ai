
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlatformOverview } from './PlatformOverview';
import { PlatformConnections } from './PlatformConnections';
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

export const CRMDashboard = () => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  // Mock data - in a real app, this would come from an API
  const platformStats = [
    {
      name: "iHealth-Sync",
      users: 1250,
      revenue: 42000,
      activeSubscriptions: 850,
      integrationStatus: "Active" as const
    },
    {
      name: "Nurse-Sync",
      users: 780,
      revenue: 34000,
      activeSubscriptions: 520,
      integrationStatus: "Active" as const
    },
    {
      name: "Medic-Sync",
      users: 950,
      revenue: 26500,
      activeSubscriptions: 680,
      integrationStatus: "Active" as const
    }
  ];

  const totalStats = {
    users: platformStats.reduce((sum, platform) => sum + platform.users, 0),
    revenue: platformStats.reduce((sum, platform) => sum + platform.revenue, 0),
    subscriptions: platformStats.reduce((sum, platform) => sum + platform.activeSubscriptions, 0),
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Platform Connections</CardTitle>
          <CardDescription>Manage integrations with your healthcare platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <PlatformConnections />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Combined Platform Statistics</CardTitle>
          <CardDescription>Total metrics across all integrated platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="text-center">
              <p className="text-3xl font-bold">{totalStats.users.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">{t.totalUsers}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">€{totalStats.revenue.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">{t.totalRevenue}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{totalStats.subscriptions.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">{t.totalSubscriptions}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platformStats.map((platform) => (
          <PlatformOverview key={platform.name} platform={platform} />
        ))}
      </div>
    </div>
  );
};
