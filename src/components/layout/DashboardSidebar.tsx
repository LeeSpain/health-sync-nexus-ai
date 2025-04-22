
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNavLinks } from "./SidebarNavLinks";
import { SidebarFooterLinks } from "./SidebarFooterLinks";
import { useLanguage } from '@/hooks/useLanguage';
import { dashboardTranslations } from '@/locales/dashboard';

export function DashboardSidebar() {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];
  
  return (
    <Sidebar>
      <SidebarHeader className="border-b text-lg font-semibold px-6 py-4">
        <Link to="/">GHS {t.sidebar?.main?.command || "Command"}</Link>
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
