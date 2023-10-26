import { create } from 'zustand';

interface NotificationState {
  notifications: StudyAttendResponse[];
  setNotifications: (notifications: StudyAttendResponse[]) => void;
  addNewNotification: (notification: StudyAttendResponse) => void;
}

const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  setNotifications: (notifications: StudyAttendResponse[]) =>
    set((prev: NotificationState) => ({
      ...prev,
      notifications,
    })),
  addNewNotification: (notification: StudyAttendResponse) =>
    set((prev: NotificationState) => ({
      ...prev,
      notifications: [...prev.notifications, notification],
    })),
}));

export default useNotificationStore;
