
import { useState, useEffect } from 'react';
import NotificationService from '@/lib/notification/notification-service';
import { Notification } from '@/lib/notification/types';

export function useNotificationService() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const refreshNotifications = () => {
    setNotifications(NotificationService.getNotifications());
  };

  const addNotification = (
    title: string,
    message: string,
    priority: Notification['priority'],
    type: Notification['type'],
    link?: string
  ) => {
    NotificationService.addNotification(title, message, priority, type, link);
    refreshNotifications();
  };

  const markAsRead = (id: string) => {
    NotificationService.markAsRead(id);
    refreshNotifications();
  };

  const clearNotifications = () => {
    NotificationService.clearNotifications();
    refreshNotifications();
  };

  useEffect(() => {
    refreshNotifications();
  }, []);

  return {
    notifications,
    addNotification,
    markAsRead,
    clearNotifications,
    unreadCount: notifications.filter(n => !n.read).length,
  };
}
