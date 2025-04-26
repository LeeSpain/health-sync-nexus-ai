
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Users,
  Mail,
  Ticket,
  ArrowUpRight,
  Terminal,
  LayoutDashboard,
  MessageSquare,
  Layers,
  FileText
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

export function SidebarNavLinks() {
  const location = useLocation();
  const { language } = useLanguage();
  const t = dashboardTranslations[language].sidebar?.main || {};
  
  const isActivePath = (path: string) => location.pathname === path;
  
  return (
    <div className="grid gap-1 px-2">
      <div className="py-2">
        <h3 className="mb-2 px-4 text-xs font-semibold tracking-tight">
          {t.main || "Main"}
        </h3>
        <div className="grid gap-1">
          <Link to="/">
            <Button
              variant={isActivePath('/') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/') && "bg-secondary/50"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>{t.dashboard || "Dashboard"}</span>
            </Button>
          </Link>
          <Link to="/command">
            <Button
              variant={isActivePath('/command') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/command') && "bg-secondary/50"
              )}
            >
              <Terminal className="h-4 w-4" />
              <span>{t.command || "Command"}</span>
            </Button>
          </Link>
          <Link to="/implementation-plan">
            <Button
              variant={isActivePath('/implementation-plan') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/implementation-plan') && "bg-secondary/50"
              )}
            >
              <FileText className="h-4 w-4" />
              <span>
                {language === "en" ? "Implementation Plan" : 
                 language === "es" ? "Plan de Implementación" : 
                 "Implementatieplan"}
              </span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-2">
        <h3 className="mb-2 px-4 text-xs font-semibold tracking-tight">
          {t.platforms || "Platforms"}
        </h3>
        <div className="grid gap-1">
          <Link to="/agents">
            <Button
              variant={isActivePath('/agents') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/agents') && "bg-secondary/50"
              )}
            >
              <Users className="h-4 w-4" />
              <span>{t.agents || "Agents"}</span>
            </Button>
          </Link>
          <Link to="/platforms">
            <Button
              variant={isActivePath('/platforms') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/platforms') && "bg-secondary/50"
              )}
            >
              <Layers className="h-4 w-4" />
              <span>{t.platforms || "Platforms"}</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-2">
        <h3 className="mb-2 px-4 text-xs font-semibold tracking-tight">
          {t.communications || "Communications"}
        </h3>
        <div className="grid gap-1">
          <Link to="/conversations">
            <Button
              variant={isActivePath('/conversations') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/conversations') && "bg-secondary/50"
              )}
            >
              <MessageSquare className="h-4 w-4" />
              <span>{t.conversations || "Conversations"}</span>
            </Button>
          </Link>
          <Link to="/emails">
            <Button
              variant={isActivePath('/emails') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/emails') && "bg-secondary/50"
              )}
            >
              <Mail className="h-4 w-4" />
              <span>{t.emails || "Emails"}</span>
            </Button>
          </Link>
          <Link to="/tickets">
            <Button
              variant={isActivePath('/tickets') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/tickets') && "bg-secondary/50"
              )}
            >
              <Ticket className="h-4 w-4" />
              <span>{t.tickets || "Tickets"}</span>
            </Button>
          </Link>
          <Link to="/escalations">
            <Button
              variant={isActivePath('/escalations') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/escalations') && "bg-secondary/50"
              )}
            >
              <ArrowUpRight className="h-4 w-4" />
              <span>{t.escalations || "Escalations"}</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="py-2">
        <h3 className="mb-2 px-4 text-xs font-semibold tracking-tight">
          {t.analytics || "Analytics"}
        </h3>
        <div className="grid gap-1">
          <Link to="/intelligence">
            <Button
              variant={isActivePath('/intelligence') ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActivePath('/intelligence') && "bg-secondary/50"
              )}
            >
              <BarChart3 className="h-4 w-4" />
              <span>{t.intelligence || "Intelligence"}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
