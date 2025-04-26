
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

interface PlatformStats {
  name: string;
  users: number;
  revenue: number;
  activeSubscriptions: number;
  integrationStatus: "Active" | "Pending" | "Inactive";
}

interface PlatformOverviewProps {
  platform: PlatformStats;
}

export const PlatformOverview: React.FC<PlatformOverviewProps> = ({ platform }) => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Pending":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{platform.name}</CardTitle>
          <Badge variant={getBadgeVariant(platform.integrationStatus)}>
            {platform.integrationStatus}
          </Badge>
        </div>
        <CardDescription>
          {t.platforms?.overview || "Platform Overview"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{platform.users}</p>
            <p className="text-sm text-muted-foreground">{t.users}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">€{platform.revenue.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">{t.revenue}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{platform.activeSubscriptions}</p>
            <p className="text-sm text-muted-foreground">{t.subscriptions}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
