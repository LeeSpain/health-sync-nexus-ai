
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { Toaster } from "@/components/ui/sonner";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="p-4 md:p-6 flex-1 overflow-auto">
            <div className="flex items-center mb-4 md:hidden">
              <SidebarTrigger className="mr-2" />
            </div>
            <main className="max-w-7xl mx-auto">{children}</main>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </SidebarProvider>
  );
}
