
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CommandConsole } from '@/components/dashboard/CommandConsole';

const CommandPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Command Console</h1>
        </div>
        
        <p className="text-muted-foreground">
          Control your GHS Agent Command system with text or voice commands.
          Isabella will process your requests and coordinate with other agents.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <CommandConsole />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CommandPage;
