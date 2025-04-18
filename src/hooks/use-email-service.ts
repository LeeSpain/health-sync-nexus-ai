
import { useState } from 'react';
import emailService from '@/lib/email-system/email-service';
import { EmailThread, EmailStatus, EmailPriority, EmailMessage, EmailAnalytics } from '@/lib/email-system/types';
import { AgentType } from '@/lib/agent-integration/types';
import { toast } from 'sonner';

export function useEmailService() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const getAllThreads = async () => {
    setLoading(true);
    setError(null);
    try {
      const threads = await emailService.getAllThreads();
      setLoading(false);
      return threads;
    } catch (err) {
      setError('Failed to fetch email threads');
      setLoading(false);
      console.error(err);
      return [];
    }
  };
  
  const getThreadsByAgent = async (agentId: string) => {
    setLoading(true);
    setError(null);
    try {
      const threads = await emailService.getThreadsByAgent(agentId);
      setLoading(false);
      return threads;
    } catch (err) {
      setError('Failed to fetch agent email threads');
      setLoading(false);
      console.error(err);
      return [];
    }
  };
  
  const getUnassignedThreads = async () => {
    setLoading(true);
    setError(null);
    try {
      const threads = await emailService.getUnassignedThreads();
      setLoading(false);
      return threads;
    } catch (err) {
      setError('Failed to fetch unassigned email threads');
      setLoading(false);
      console.error(err);
      return [];
    }
  };
  
  const getThreadById = async (threadId: string) => {
    setLoading(true);
    setError(null);
    try {
      const thread = await emailService.getThreadById(threadId);
      setLoading(false);
      return thread;
    } catch (err) {
      setError('Failed to fetch email thread');
      setLoading(false);
      console.error(err);
      return null;
    }
  };
  
  const assignThread = async (threadId: string, agentId: AgentType, assignedBy: AgentType = 'isabella') => {
    setLoading(true);
    setError(null);
    try {
      const updated = await emailService.assignThread(threadId, agentId, assignedBy);
      setLoading(false);
      if (updated) {
        toast.success(`Thread assigned to ${agentId}`);
      } else {
        toast.error('Failed to assign thread');
      }
      return updated;
    } catch (err) {
      setError('Failed to assign email thread');
      setLoading(false);
      console.error(err);
      toast.error('Error assigning thread');
      return null;
    }
  };
  
  const updateThreadStatus = async (threadId: string, status: EmailStatus, agentId: AgentType) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await emailService.updateThreadStatus(threadId, status, agentId);
      setLoading(false);
      if (updated) {
        toast.success(`Thread status updated to ${status}`);
      } else {
        toast.error('Failed to update thread status');
      }
      return updated;
    } catch (err) {
      setError('Failed to update thread status');
      setLoading(false);
      console.error(err);
      toast.error('Error updating thread status');
      return null;
    }
  };
  
  const addReply = async (threadId: string, reply: Omit<EmailMessage, 'id' | 'threadId'>) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await emailService.addReply(threadId, reply);
      setLoading(false);
      if (updated) {
        toast.success('Reply sent');
      } else {
        toast.error('Failed to send reply');
      }
      return updated;
    } catch (err) {
      setError('Failed to send reply');
      setLoading(false);
      console.error(err);
      toast.error('Error sending reply');
      return null;
    }
  };
  
  const updateThreadPriority = async (threadId: string, priority: EmailPriority) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await emailService.updateThreadPriority(threadId, priority);
      setLoading(false);
      if (updated) {
        toast.success(`Thread priority updated to ${priority}`);
      } else {
        toast.error('Failed to update thread priority');
      }
      return updated;
    } catch (err) {
      setError('Failed to update thread priority');
      setLoading(false);
      console.error(err);
      toast.error('Error updating thread priority');
      return null;
    }
  };
  
  const getEmailAnalytics = async () => {
    setLoading(true);
    setError(null);
    try {
      const analytics = await emailService.getEmailAnalytics();
      setLoading(false);
      return analytics;
    } catch (err) {
      setError('Failed to fetch email analytics');
      setLoading(false);
      console.error(err);
      return null;
    }
  };
  
  return {
    loading,
    error,
    getAllThreads,
    getThreadsByAgent,
    getUnassignedThreads,
    getThreadById,
    assignThread,
    updateThreadStatus,
    addReply,
    updateThreadPriority,
    getEmailAnalytics
  };
}
