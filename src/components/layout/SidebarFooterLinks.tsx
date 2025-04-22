
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HelpCircle, Cog } from 'lucide-react';

export function SidebarFooterLinks() {
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;

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
          <span>Help & Documentation</span>
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
          <span>Settings</span>
        </Button>
      </Link>
    </div>
  );
}
