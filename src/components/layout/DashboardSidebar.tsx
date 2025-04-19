
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Activity, 
  GitBranch, 
  Settings, 
  BookOpen,
  HelpCircle,
  Mic,
  Globe,
  Mail,
  Ticket,
  Brain
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function DashboardSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center">
            <span className="font-bold text-isabella-DEFAULT text-sm">GHS</span>
          </div>
          <div>
            <h2 className="text-sm font-semibold">GHS Agent Command</h2>
            <p className="text-xs text-muted-foreground">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className={`flex items-center ${location.pathname === '/' ? 'text-primary' : ''}`}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/command" className={`flex items-center ${location.pathname === '/command' ? 'text-primary' : ''}`}>
                    <Mic className="mr-2 h-4 w-4" />
                    <span>Command Console</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/conversations" className={`flex items-center ${location.pathname === '/conversations' ? 'text-primary' : ''}`}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Conversations</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/emails" className={`flex items-center ${location.pathname === '/emails' ? 'text-primary' : ''}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email Management</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/tickets" className={`flex items-center ${location.pathname === '/tickets' ? 'text-primary' : ''}`}>
                    <Ticket className="mr-2 h-4 w-4" />
                    <span>Ticket System</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/agents" className={`flex items-center ${location.pathname === '/agents' ? 'text-primary' : ''}`}>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Agent Management</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/intelligence" className={`flex items-center ${location.pathname === '/intelligence' ? 'text-primary' : ''}`}>
                    <Brain className="mr-2 h-4 w-4" />
                    <span>Agent Intelligence</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/platforms" className={`flex items-center ${location.pathname === '/platforms' ? 'text-primary' : ''}`}>
                    <Globe className="mr-2 h-4 w-4" />
                    <span>Connected Platforms</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <Separator className="my-4" />
        
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/analytics" className={`flex items-center ${location.pathname === '/analytics' ? 'text-primary' : ''}`}>
                    <Activity className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/escalations" className={`flex items-center ${location.pathname === '/escalations' ? 'text-primary' : ''}`}>
                    <GitBranch className="mr-2 h-4 w-4" />
                    <span>Escalation Rules</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/training" className={`flex items-center ${location.pathname === '/training' ? 'text-primary' : ''}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Training Module</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/settings" className={`flex items-center ${location.pathname === '/settings' ? 'text-primary' : ''}`}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        <div className="flex flex-col gap-4">
          <Button variant="outline" size="sm" className="justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help & Documentation</span>
          </Button>
          <div className="text-xs text-muted-foreground">
            <p>GHS Agent Command v1.0</p>
            <p>© 2025 Global Health Sync</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
