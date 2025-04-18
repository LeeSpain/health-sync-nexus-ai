import React, { useState, useEffect } from 'react';
import { useEmailService } from '@/hooks/use-email-service';
import { EmailThread, EmailStatus } from '@/lib/email-system/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  ArrowUpRight, 
  Clock, 
  AlertTriangle,
  CheckCircle2, 
  HelpCircle, 
  Inbox,
  Pause 
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface EmailListProps {
  agentId?: string;
  onSelectThread?: (thread: EmailThread) => void;
  filter?: {
    status?: EmailStatus[];
  };
}

export function EmailList({ agentId, onSelectThread, filter }: EmailListProps) {
  const [threads, setThreads] = useState<EmailThread[]>([]);
  const { loading, getAllThreads, getThreadsByAgent, getUnassignedThreads } = useEmailService();

  useEffect(() => {
    fetchThreads();
  }, [agentId, filter]);

  const fetchThreads = async () => {
    let fetchedThreads: EmailThread[] = [];
    
    if (agentId) {
      fetchedThreads = await getThreadsByAgent(agentId);
    } else if (agentId === undefined) {
      fetchedThreads = await getAllThreads();
    } else {
      fetchedThreads = await getUnassignedThreads();
    }
    
    // Apply filters if provided
    if (filter?.status && filter.status.length > 0) {
      fetchedThreads = fetchedThreads.filter(thread => 
        filter.status?.includes(thread.status)
      );
    }
    
    setThreads(fetchedThreads);
  };

  const getStatusIcon = (status: EmailStatus) => {
    switch (status) {
      case 'unread':
        return <Inbox className="h-4 w-4 text-blue-500" />;
      case 'assigned':
        return <ArrowUpRight className="h-4 w-4 text-yellow-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'waiting':
        return <Pause className="h-4 w-4 text-purple-500" />;
      case 'resolved':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'escalated':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <HelpCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: EmailStatus) => {
    switch (status) {
      case 'unread':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'assigned':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'in-progress':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'waiting':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'resolved':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'escalated':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'bg-blue-100 text-blue-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <Card key={i} className="border cursor-pointer hover:shadow-sm transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex justify-between pt-2">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (threads.length === 0) {
    return (
      <div className="text-center py-8">
        <Inbox className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">No emails found</h3>
        <p className="text-sm text-muted-foreground">
          {agentId ? "No emails are currently assigned to this agent." : "There are no emails matching your filters."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {threads.map(thread => (
        <Card 
          key={thread.id} 
          className={`border cursor-pointer hover:shadow-sm transition-shadow ${
            thread.status === 'unread' ? 'border-l-4 border-l-blue-500' : ''
          }`}
          onClick={() => onSelectThread?.(thread)}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h4 className="font-medium line-clamp-1">{thread.subject}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {thread.clientName} &lt;{thread.clientEmail}&gt;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getPriorityColor(thread.priority)}>
                  {thread.priority}
                </Badge>
                <Badge variant="outline" className={getStatusColor(thread.status)}>
                  <span className="flex items-center gap-1">
                    {getStatusIcon(thread.status)}
                    {thread.status}
                  </span>
                </Badge>
              </div>
            </div>
            
            <p className="text-sm mt-2 line-clamp-2">
              {thread.messages[thread.messages.length - 1].body}
            </p>
            
            <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
              <div className="flex flex-wrap gap-1">
                {thread.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span>
                {formatDistanceToNow(new Date(thread.lastMessageAt), { addSuffix: true })}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
