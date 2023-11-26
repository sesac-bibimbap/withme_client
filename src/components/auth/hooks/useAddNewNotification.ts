import { useEffect } from 'react';
import { socket } from '../../../common/utils/socket';
import useNotificationStore from '../../../common/store/notificationState';
import { NotificationInstance } from 'antd/es/notification/interface';

const useAddNewNotification = (api?: NotificationInstance) => {
  const { addNewNotification } = useNotificationStore();

  useEffect(() => {
    const receiveNewNotification = (newNotification: any) => {
      addNewNotification(newNotification);
      if (api) {
        api.open({
          message: '새로운 알림이 도착했습니다.',
          description: '테스트',
        });
      }
    };
    socket.on('new-notification', receiveNewNotification);
    return () => {
      socket.off('new-notification', receiveNewNotification);
    };
  }, [addNewNotification, api]);
};

export default useAddNewNotification;
