
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { dashboardTranslations } from "@/locales/dashboard";
import { EmailAnalytics } from "@/lib/email-system/types";

interface StatsCardsProps {
  emailStats: EmailAnalytics | null;
  ticketCount: { total: number; open: number };
}

export const StatsCards: React.FC<StatsCardsProps> = ({ emailStats, ticketCount }) => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <Mail className="h-5 w-5" />
              {t.emails.label}
            </CardTitle>
            <Badge variant="outline" className="bg-blue-100 text-blue-800">
              {t.emails.active}
            </Badge>
          </div>
          <CardDescription>
            {t.emails.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{emailStats?.openThreads || 0}</p>
              <p className="text-xs text-muted-foreground">{t.emails.open}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{emailStats?.resolvedThreads || 0}</p>
              <p className="text-xs text-muted-foreground">{t.emails.resolved}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{emailStats?.escalatedThreads || 0}</p>
              <p className="text-xs text-muted-foreground">{t.emails.escalated}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link to="/emails">
              <Mail className="mr-2 h-4 w-4" />
              {t.emails.view}
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <Ticket className="h-5 w-5" />
              {t.tickets.label}
            </CardTitle>
            <Badge variant="outline" className="bg-green-100 text-green-800">
              {t.tickets.active}
            </Badge>
          </div>
          <CardDescription>
            {t.tickets.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{ticketCount.open}</p>
              <p className="text-xs text-muted-foreground">{t.tickets.open}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{ticketCount.total}</p>
              <p className="text-xs text-muted-foreground">{t.tickets.total}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link to="/tickets">
              <Ticket className="mr-2 h-4 w-4" />
              {t.tickets.view}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
