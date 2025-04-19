
import { Notification, NotificationPriority } from './types';
import { toast } from '@/hooks/use-toast';

class NotificationService {
  private static instance: NotificationService;
  private notifications: Notification[] = [];

  private constructor() {}

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  public addNotification(
    title: string,
    message: string,
    priority: NotificationPriority,
    type: Notification['type'],
    link?: string
  ): Notification {
    const notification: Notification = {
      id: `notification_${Date.now()}`,
      title,
      message,
      timestamp: new Date().toISOString(),
      priority,
      read: false,
      type,
      link,
    };

    this.notifications.unshift(notification);

    // Show toast for high priority notifications
    if (priority === 'high' || priority === 'critical') {
      toast({
        title: notification.title,
        description: notification.message,
        variant: priority === 'critical' ? 'destructive' : 'default',
      });
    }

    return notification;
  }

  public getNotifications(): Notification[] {
    return this.notifications;
  }

  public markAsRead(id: string): void {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
    }
  }

  public clearNotifications(): void {
    this.notifications = [];
  }
}

export default NotificationService.getInstance();
