
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Command,
  MessageSquare,
  Users2,
  Mail,
  Ticket,
  Brain,
  BarChart4,
  Workflow,
  FolderKanban,
  Network,
} from 'lucide-react';

export function SidebarNavLinks() {
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center">
      <Link to="/">
        <Button
          variant={isActivePath('/') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/') && "bg-secondary/50"
          )}
        >
          <Home className="h-4 w-4" />
          <span>Dashboard</span>
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
          <Command className="h-4 w-4" />
          <span>Command Console</span>
        </Button>
      </Link>
      <Link to="/conversations">
        <Button
          variant={isActivePath('/conversations') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/conversations') && "bg-secondary/50"
          )}
        >
          <MessageSquare className="h-4 w-4" />
          <span>Conversations</span>
        </Button>
      </Link>
      <Link to="/agents">
        <Button
          variant={isActivePath('/agents') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/agents') && "bg-secondary/50"
          )}
        >
          <Users2 className="h-4 w-4" />
          <span>Agents</span>
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
          <span>Emails</span>
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
          <span>Tickets</span>
        </Button>
      </Link>
      <Link to="/intelligence">
        <Button
          variant={isActivePath('/intelligence') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/intelligence') && "bg-secondary/50"
          )}
        >
          <Brain className="h-4 w-4" />
          <span>Intelligence</span>
        </Button>
      </Link>
      <Link to="/analytics">
        <Button
          variant={isActivePath('/analytics') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/analytics') && "bg-secondary/50"
          )}
        >
          <BarChart4 className="h-4 w-4" />
          <span>Analytics</span>
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
          <Workflow className="h-4 w-4" />
          <span>Escalations</span>
        </Button>
      </Link>
      <Link to="/training">
        <Button
          variant={isActivePath('/training') ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-2",
            isActivePath('/training') && "bg-secondary/50"
          )}
        >
          <FolderKanban className="h-4 w-4" />
          <span>Training</span>
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
          <Network className="h-4 w-4" />
          <span>Platforms</span>
        </Button>
      </Link>
    </nav>
  );
}

