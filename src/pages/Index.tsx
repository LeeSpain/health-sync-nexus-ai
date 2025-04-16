
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AgentCard } from '@/components/dashboard/AgentCard';
import { CommandConsole } from '@/components/dashboard/CommandConsole';
import { SystemStats } from '@/components/dashboard/SystemStats';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";

const Index = () => {
  // Mock data for agent cards
  const agentData = [
    {
      name: "Anna",
      role: "Wellness Assistant (iHealth-Sync)",
      type: "anna" as const,
      activeConversations: 15,
      sentiment: 85,
      escalations: 0,
      topTopics: ["Wellness Check-in", "Device Setup", "Appointment Booking"]
    },
    {
      name: "Emma",
      role: "Nurse Assistant (Nurse-Sync)",
      type: "emma" as const,
      activeConversations: 8,
      sentiment: 72,
      escalations: 3,
      topTopics: ["Care Plans", "Training", "Support Questions"]
    },
    {
      name: "Julia",
      role: "Medical Assistant (Medic-Sync)",
      type: "julia" as const,
      activeConversations: 12,
      sentiment: 79,
      escalations: 1,
      topTopics: ["Patient Notes", "Documentation", "Care Suggestions"]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">GHS Command Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>

        <SystemStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <CommandConsole />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">New wellness check-in alerts</p>
                  <span className="text-xs text-muted-foreground">16 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Nurse training completion</p>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Emma escalated support issue</p>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Julia updated medical protocols</p>
                  <span className="text-xs text-muted-foreground">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Agent Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agentData.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
