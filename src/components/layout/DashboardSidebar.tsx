import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BarChart4, 
  Command, 
  Cog, 
  escalator, // Updated import 
  FolderKanban,
  HelpCircle,
  Home, 
  Mail, 
  MessageSquare, 
  Network, 
  Ticket, 
  Users2, 
  Brain
} from 'lucide-react';

export function DashboardSidebar() {
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;

  return (
    <Sidebar>
      <SidebarHeader className="border-b text-lg font-semibold px-6 py-4">
        <Link to="/">GHS Command</Link>
      </SidebarHeader>
      <ScrollArea className="flex-1">
        <SidebarContent>
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
                <escalator className="h-4 w-4" />
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
        </SidebarContent>
      </ScrollArea>
      <SidebarFooter className="border-t p-4">
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
      </SidebarFooter>
    </Sidebar>
  );
}
