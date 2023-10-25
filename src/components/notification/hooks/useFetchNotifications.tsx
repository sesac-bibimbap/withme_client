import { useEffect } from 'react';
import { socket } from '../../../common/utils/socket';
import NotificationHeader from '../Notifications/NotificationLayout/NotificationHeader';
import NotificationContents from '../Notifications/NotificationLayout/NotificationContents';
import useNotificationStore from '../../../common/store/notificationState';

const useFetchNotifications = () => {
  const { notifications, setNotifications } = useNotificationStore();

  useEffect(() => {
    const fetchNotifications = async (notifications: StudyAttendResponse[]) => {
      setNotifications(notifications);
    };
    socket.on('fetch-notifications', fetchNotifications);
    return () => {
      socket.off('fetch-notifications', fetchNotifications);
    };
  }, [setNotifications]);

  const getItems = notifications.map((item, idx) => ({
    key: String(idx),
    label: <NotificationHeader item={item} />,
    children: <NotificationContents item={item} />,
  }));

  return { notifications, getItems };
};

export default useFetchNotifications;
