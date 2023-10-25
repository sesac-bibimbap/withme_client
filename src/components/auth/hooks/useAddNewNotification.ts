import { useEffect } from 'react';
import { socket } from '../../../common/utils/socket';
import useNotificationStore from '../../../common/store/notificationState';

const useAddNewNotification = () => {
  const { addNewNotification } = useNotificationStore();

  useEffect(() => {
    const receiveNewNotification = (newNotification: any) => {
      addNewNotification(newNotification);
    };
    socket.on('new-notification', receiveNewNotification);
    return () => {
      socket.off('new-notification', receiveNewNotification);
    };
  }, [addNewNotification]);
};

export default useAddNewNotification;
