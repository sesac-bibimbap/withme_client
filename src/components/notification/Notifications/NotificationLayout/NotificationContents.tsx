import { NOTIFICATION_ACTIONS } from '../../../../common/constants/enum/notification.enum';
import NotificationAccept from '../NotificationContents/NotificationAccept';
import NotificationReject from '../NotificationContents/NotificationReject';
import NotificationRequest from '../NotificationContents/NotificationRequest';

const NotificationContents = ({ item }: NotificationItemProps) => {
  const { action } = item;

  return (
    <div>
      {action === NOTIFICATION_ACTIONS.STUDY_REQUEST && (
        <NotificationRequest item={item} />
      )}
      {action === NOTIFICATION_ACTIONS.STUDY_ACCEPT && (
        <NotificationAccept item={item} />
      )}
      {action === NOTIFICATION_ACTIONS.STUDY_REJECT && (
        <NotificationReject item={item} />
      )}
      {/* TODO: 스터디 문의 완성시 구현 */}
      {/* {action === NOTIFICATION_ACTIONS.INQUIRY_REGISTER && (
          <NotificationInquiryRegister item={item} />
        )}
        {action === NOTIFICATION_ACTIONS.INQUIRY_RESPONSE && (
          <NotificationInquiryResponse item={item} />
        )} */}
    </div>
  );
};

export default NotificationContents;
