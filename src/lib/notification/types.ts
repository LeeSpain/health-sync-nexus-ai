
export type NotificationPriority = 'low' | 'medium' | 'high' | 'critical';

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  priority: NotificationPriority;
  read: boolean;
  type: 'email' | 'ticket' | 'escalation' | 'system';
  link?: string;
}
