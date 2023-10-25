import Notifications from '../../components/notification/Notifications/Notifications';
import useAddNewNotification from '../../components/auth/hooks/useAddNewNotification';

const NotificationPage = () => {
  useAddNewNotification();

  return (
    <>
      <Notifications />
    </>
  );
};

export default NotificationPage;
