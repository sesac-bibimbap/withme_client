import Notifications from '../../components/notification/Notifications/Notifications';
import useAddNewNotification from '../../components/auth/hooks/useAddNewNotification';
import {
  notification_container,
  notification_title,
  notification_wrapper,
} from './NotificationPage.style';

const NotificationPage = () => {
  useAddNewNotification();

  return (
    <div style={notification_container}>
      <div style={notification_title}>알림 목록</div>
      <div className="NotificationPage_scroll" style={notification_wrapper}>
        <Notifications />
      </div>
    </div>
  );
};

export default NotificationPage;
