
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { EmailList } from '@/components/email/EmailList';
import { EmailThread } from '@/components/email/EmailThread';
import { EmailFilters } from '@/components/email/EmailFilters';
import { useEmailService } from '@/hooks/use-email-service';
import { EmailThread as EmailThreadType, EmailStatus, EmailPriority } from '@/lib/email-system/types';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, ArrowLeft } from 'lucide-react';

const EmailsPage = () => {
  const [selectedThread, setSelectedThread] = useState<EmailThreadType | null>(null);
  const [selectedStatuses, setSelectedStatuses] = useState<EmailStatus[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<EmailPriority[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const [currentAgentId, setCurrentAgentId] = useState('isabella');
  const { getAllThreads } = useEmailService();
  const location = useLocation();

  useEffect(() => {
    // Extract agent from URL if specified
    const params = new URLSearchParams(location.search);
    const agent = params.get('agent');
    if (agent) {
      setCurrentAgentId(agent);
      setActiveTab(agent);
    }
  }, [location]);

  const handleSelectThread = (thread: EmailThreadType) => {
    setSelectedThread(thread);
  };

  const handleThreadUpdated = (updatedThread: EmailThreadType) => {
    setSelectedThread(updatedThread);
  };

  const handleClearFilters = () => {
    setSelectedStatuses([]);
    setSelectedPriorities([]);
  };

  const handleRefresh = async () => {
    // If we had a selected thread, refresh it
    if (selectedThread) {
      const threads = await getAllThreads();
      const refreshedThread = threads.find(t => t.id === selectedThread.id);
      if (refreshedThread) {
        setSelectedThread(refreshedThread);
      }
    }
  };

  const handleBackToList = () => {
    setSelectedThread(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Email Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            onClick={handleRefresh}
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>

        {selectedThread ? (
          <>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="gap-1"
                onClick={handleBackToList}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Inbox
              </Button>
            </div>
            <EmailThread 
              thread={selectedThread} 
              currentAgentId={currentAgentId} 
              onThreadUpdated={handleThreadUpdated} 
            />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Email Management</h1>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Emails</TabsTrigger>
                <TabsTrigger value="unassigned">Unassigned</TabsTrigger>
                <TabsTrigger value="anna">Anna's Inbox</TabsTrigger>
                <TabsTrigger value="emma">Emma's Inbox</TabsTrigger>
                <TabsTrigger value="julia">Julia's Inbox</TabsTrigger>
                <TabsTrigger value="isabella">Isabella's Inbox</TabsTrigger>
              </TabsList>
              
              <div className="mb-4">
                <EmailFilters
                  selectedStatuses={selectedStatuses}
                  selectedPriorities={selectedPriorities}
                  onStatusChange={setSelectedStatuses}
                  onPriorityChange={setSelectedPriorities}
                  onClearFilters={handleClearFilters}
                />
              </div>

              <TabsContent value="all" className="mt-0">
                <EmailList
                  onSelectThread={handleSelectThread}
                  filter={{
                    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                  }}
                />
              </TabsContent>
              
              <TabsContent value="unassigned" className="mt-0">
                <EmailList
                  agentId=""
                  onSelectThread={handleSelectThread}
                  filter={{
                    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                  }}
                />
              </TabsContent>
              
              <TabsContent value="anna" className="mt-0">
                <EmailList
                  agentId="anna"
                  onSelectThread={handleSelectThread}
                  filter={{
                    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                  }}
                />
              </TabsContent>
              
              <TabsContent value="emma" className="mt-0">
                <EmailList
                  agentId="emma"
                  onSelectThread={handleSelectThread}
                  filter={{
                    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                  }}
                />
              </TabsContent>
              
              <TabsContent value="julia" className="mt-0">
                <EmailList
                  agentId="julia"
                  onSelectThread={handleSelectThread}
                  filter={{
                    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                  }}
                />
              </TabsContent>
              
              <TabsContent value="isabella" className="mt-0">
                <EmailList
                  agentId="isabella"
                  onSelectThread={handleSelectThread}
                  filter={{
                    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
                  }}
                />
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EmailsPage;
