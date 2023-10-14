import { detailDate } from '../../common/utils/getDetailDate';
import {
  notification_common,
  notification_header_container,
  notification_header_color_icon,
  notification_header_left,
  notification_header_right,
} from './Notifications.style';

const NotificationHeader = ({ item }: NotificationItemProps) => {
  const { type, color, studyName, time, comment, fromUser } = item;

  return (
    <>
      <div
        style={{
          ...notification_common,
          ...notification_header_container,
        }}
      >
        <div style={notification_header_left}>
          <div style={notification_header_color_icon(color)} />
          <div>{type}</div>
          <div>[{studyName}]</div>
          <div>{comment}</div>
        </div>
        <div style={notification_header_right}>
          <div>{detailDate(time)}</div>
          <div>{fromUser.profile.nickname ?? '신청자'}</div>
        </div>
      </div>
    </>
  );
};

export default NotificationHeader;
