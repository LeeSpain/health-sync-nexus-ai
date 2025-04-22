
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNavLinks } from "./SidebarNavLinks";
import { SidebarFooterLinks } from "./SidebarFooterLinks";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b text-lg font-semibold px-6 py-4">
        <Link to="/">GHS Command</Link>
      </SidebarHeader>
      <ScrollArea className="flex-1">
        <SidebarContent>
          <SidebarNavLinks />
        </SidebarContent>
      </ScrollArea>
      <SidebarFooter className="border-t p-4">
        <SidebarFooterLinks />
      </SidebarFooter>
    </Sidebar>
  );
}
