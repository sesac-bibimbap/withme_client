import Notifications from '../../components/notification/Notifications/Notifications';
import useAddNewNotification from '../../components/auth/hooks/useAddNewNotification';

const NotificationPage = () => {
  useAddNewNotification();

  return (
    <div
      style={{
        width: '96%',
        height: '95%',
        background: '#222121',
        borderRadius: '15px',
        padding: '15px',
        margin: '15px',
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          marginTop: '15px',
        }}
      >
        알림 목록
      </div>
      <div
        style={{
          background: '#454343',
          height: '88%',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          overflowY: 'scroll',
        }}
      >
        <Notifications />
      </div>
    </div>
  );
};

export default NotificationPage;
