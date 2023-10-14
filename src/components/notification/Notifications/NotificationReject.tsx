import {
  notification_common,
  notification_contents_common,
  notification_reject_container,
  notification_reject_content,
  notification_reject_title,
} from './Notifications.style';

const NotificationReject = ({ item }: NotificationItemProps) => {
  const { contents } = item;
  const [[, value]] = Object.entries(contents);

  return (
    <>
      <div
        style={{
          ...notification_common,
          ...notification_contents_common,
        }}
      >
        <div style={notification_reject_container}>
          <div style={notification_reject_title}>거부사유</div>
          <div style={notification_reject_content}>{value}</div>
        </div>
      </div>
    </>
  );
};

export default NotificationReject;
