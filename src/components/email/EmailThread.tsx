
import React, { useState } from 'react';
import { EmailThread as EmailThreadType, EmailStatus, EmailPriority } from '@/lib/email-system/types';
import { useEmailService } from '@/hooks/use-email-service';
import { formatDistanceToNow, format } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AgentAvatar } from '@/components/agents/AgentAvatar';
import { 
  Send, 
  Reply, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  ArrowUp,
  PaperclipIcon,
  CalendarIcon,
  Flag
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EmailThreadProps {
  thread: EmailThreadType;
  currentAgentId: string;
  onThreadUpdated?: (updatedThread: EmailThreadType) => void;
}

export function EmailThread({ thread, currentAgentId, onThreadUpdated }: EmailThreadProps) {
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  const { addReply, updateThreadStatus, updateThreadPriority } = useEmailService();

  const handleSendReply = async () => {
    if (!replyText.trim()) return;
    
    const reply = {
      subject: `Re: ${thread.subject}`,
      from: {
        email: 'support@health-system.com',
        name: getAgentName(currentAgentId)
      },
      to: [thread.clientEmail],
      body: replyText,
      sentAt: new Date().toISOString(),
    };
    
    const updatedThread = await addReply(thread.id, reply);
    if (updatedThread) {
      onThreadUpdated?.(updatedThread);
      setReplyText('');
      setShowReplyForm(false);
      
      // If the thread was unread or assigned, update it to in-progress
      if (thread.status === 'unread' || thread.status === 'assigned') {
        const statusUpdated = await updateThreadStatus(thread.id, 'in-progress', currentAgentId as any);
        if (statusUpdated) {
          onThreadUpdated?.(statusUpdated);
        }
      }
    }
  };

  const handleStatusChange = async (status: EmailStatus) => {
    const updatedThread = await updateThreadStatus(thread.id, status, currentAgentId as any);
    if (updatedThread) {
      onThreadUpdated?.(updatedThread);
    }
  };

  const handlePriorityChange = async (priority: EmailPriority) => {
    const updatedThread = await updateThreadPriority(thread.id, priority);
    if (updatedThread) {
      onThreadUpdated?.(updatedThread);
    }
  };

  const getAgentName = (agentId: string) => {
    switch (agentId) {
      case 'anna':
        return 'Anna (Wellness Assistant)';
      case 'emma':
        return 'Emma (Nurse Assistant)';
      case 'julia':
        return 'Julia (Medical Assistant)';
      case 'isabella':
        return 'Isabella (Command Center)';
      default:
        return 'GHS Support';
    }
  };

  const getAgentColor = (agentId: string) => {
    switch (agentId) {
      case 'anna':
        return '#A390E4'; // Lilac
      case 'emma':
        return '#10B981'; // Emerald Green
      case 'julia':
        return '#60A5FA'; // Sky Blue
      case 'isabella':
        return '#FEF3C7'; // Ivory
      default:
        return '#CBD5E1';
    }
  };

  const isPriorityDisabled = thread.status === 'resolved' || thread.status === 'escalated';
  const isStatusUpdateDisabled = false; // Could be based on permissions

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{thread.subject}</h2>
          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
            <span className="text-sm">
              {thread.category && (
                <Badge variant="outline" className="mr-2">
                  {thread.category}
                </Badge>
              )}
              {thread.assignedTo && (
                <span className="mr-2">
                  Assigned to{" "}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge variant="outline" className="font-medium">
                          {getAgentName(thread.assignedTo)}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Assigned {formatDistanceToNow(new Date(thread.assignedAt!))} ago</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
              )}
              <span>
                <CalendarIcon className="inline h-3 w-3 mr-1" />
                {formatDistanceToNow(new Date(thread.createdAt))} ago
              </span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Priority</span>
            <Select
              value={thread.priority}
              onValueChange={(value: EmailPriority) => handlePriorityChange(value)}
              disabled={isPriorityDisabled}
            >
              <SelectTrigger className="h-8 w-[120px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Status</span>
            <Select
              value={thread.status}
              onValueChange={(value: EmailStatus) => handleStatusChange(value)}
              disabled={isStatusUpdateDisabled}
            >
              <SelectTrigger className="h-8 w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unread">
                  <span className="flex items-center gap-2">
                    Unread
                  </span>
                </SelectItem>
                <SelectItem value="in-progress">
                  <span className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    In Progress
                  </span>
                </SelectItem>
                <SelectItem value="waiting">
                  <span className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    Waiting
                  </span>
                </SelectItem>
                <SelectItem value="resolved">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Resolved
                  </span>
                </SelectItem>
                <SelectItem value="escalated">
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Escalated
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {thread.messages.map((message, index) => {
          const isFromClient = message.from.email === thread.clientEmail;
          
          return (
            <Card
              key={message.id}
              className={`border ${
                isFromClient ? "border-l-4 border-l-blue-400" : "border-l-4"
              }`}
              style={{
                borderLeftColor: isFromClient ? undefined : getAgentColor(thread.assignedTo || 'default')
              }}
            >
              <CardHeader className="py-3 px-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {isFromClient ? (
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-medium">
                        {message.from.name.charAt(0)}
                      </div>
                    ) : (
                      <AgentAvatar 
                        name={message.from.name.split(' ')[0]} 
                        color={getAgentColor(thread.assignedTo || 'default')} 
                      />
                    )}
                    <div>
                      <div className="font-medium">{message.from.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {message.from.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {format(new Date(message.sentAt), 'MMM d, yyyy h:mm a')}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-2 px-4">
                <div className="whitespace-pre-wrap">{message.body}</div>
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm text-muted-foreground mb-2">Attachments:</div>
                    <div className="flex flex-wrap gap-2">
                      {message.attachments.map((attachment) => (
                        <div
                          key={attachment.id}
                          className="flex items-center gap-2 p-2 bg-muted rounded-md"
                        >
                          <PaperclipIcon className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <div className="text-sm font-medium">{attachment.fileName}</div>
                            <div className="text-xs text-muted-foreground">
                              {(attachment.fileSize / 1024 / 1024).toFixed(1)} MB
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
              {index === thread.messages.length - 1 && isFromClient && !showReplyForm && (
                <CardFooter className="py-2 px-4 flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => setShowReplyForm(true)}
                  >
                    <Reply className="h-4 w-4" />
                    Reply
                  </Button>
                </CardFooter>
              )}
            </Card>
          );
        })}
      </div>
      
      {showReplyForm && (
        <Card>
          <CardHeader className="py-3 px-4">
            <div className="flex items-center gap-2">
              <AgentAvatar 
                name={getAgentName(currentAgentId).split(' ')[0]} 
                color={getAgentColor(currentAgentId)} 
              />
              <div>
                <div className="font-medium">{getAgentName(currentAgentId)}</div>
                <div className="text-xs text-muted-foreground">
                  support@health-system.com
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0 px-4">
            <Textarea
              placeholder="Write your reply..."
              className="min-h-[120px] resize-none"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="flex gap-2 mt-4 justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowReplyForm(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="gap-1"
                onClick={handleSendReply}
                disabled={!replyText.trim()}
              >
                <Send className="h-4 w-4" />
                Send Reply
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {!showReplyForm && thread.status !== 'resolved' && thread.status !== 'escalated' && (
        <div className="flex justify-end gap-2">
          <Button 
            variant="default" 
            className="gap-1"
            onClick={() => setShowReplyForm(true)}
          >
            <Reply className="h-4 w-4" />
            Reply
          </Button>
          
          <Button 
            variant="outline" 
            className="gap-1"
            onClick={() => handleStatusChange('resolved')}
          >
            <CheckCircle2 className="h-4 w-4" />
            Mark as Resolved
          </Button>
          
          <Button 
            variant="outline" 
            className="gap-1 text-destructive hover:text-destructive"
            onClick={() => handleStatusChange('escalated')}
          >
            <ArrowUp className="h-4 w-4" />
            Escalate
          </Button>
        </div>
      )}
    </div>
  );
}
