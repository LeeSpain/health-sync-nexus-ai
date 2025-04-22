
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpCircle, Cog, Code, DollarSign } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

export function SidebarFooterLinks() {
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;
  const { language } = useLanguage();
  const t = dashboardTranslations[language].sidebar.footer;

  return (
    <div className="grid gap-1">
      <Link to="/help">
        <Button
          variant={isActivePath('/help') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/help') && "bg-secondary/50"
          )}
        >
          <HelpCircle className="h-4 w-4" />
          <span>{t.help}</span>
        </Button>
      </Link>
      <Link to="/api-integration">
        <Button
          variant={isActivePath('/api-integration') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/api-integration') && "bg-secondary/50"
          )}
        >
          <Code className="h-4 w-4" />
          <span>{t.api}</span>
        </Button>
      </Link>
      <Link to="/financials">
        <Button
          variant={isActivePath('/financials') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/financials') && "bg-secondary/50"
          )}
        >
          <DollarSign className="h-4 w-4" />
          <span>{t.financials}</span>
        </Button>
      </Link>
      <Link to="/settings">
        <Button
          variant={isActivePath('/settings') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/settings') && "bg-secondary/50"
          )}
        >
          <Cog className="h-4 w-4" />
          <span>{t.settings}</span>
        </Button>
      </Link>
    </div>
  );
}
