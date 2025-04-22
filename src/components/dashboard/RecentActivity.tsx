
import React from "react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { dashboardTranslations } from "@/locales/dashboard";

interface RecentActivityProps {}

export const RecentActivity: React.FC<RecentActivityProps> = () => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{t.recentActivity}</h2>
      </div>
      <Card className="bg-card p-4 rounded-lg border border-border shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm">{t.wellnessCheck}</p>
            <span className="text-xs text-muted-foreground">16 min ago</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">{t.nurseTraining}</p>
            <span className="text-xs text-muted-foreground">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">{t.emmaEscalated}</p>
            <span className="text-xs text-muted-foreground">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">{t.juliaUpdated}</p>
            <span className="text-xs text-muted-foreground">
              {language === "en"
                ? "Yesterday"
                : language === "es"
                ? "Ayer"
                : "Gisteren"}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
