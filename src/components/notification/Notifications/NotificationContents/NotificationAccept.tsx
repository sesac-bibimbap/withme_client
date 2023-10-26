import { useNavigate } from 'react-router-dom';
import {
  notification_accept_navigate_room,
  notification_accept_navigate_room_btn,
  notification_common,
  notification_contents_common,
} from '../Notifications.style';

const NotificationAccept = ({ item }: { item: StudyAttendResponse }) => {
  const { contents, studyId } = item;
  const [[, value]] = Object.entries(contents);
  const navigate = useNavigate();

  const onClickNavigateToStudyRoom = () => navigate(`/study/room/${studyId}`);

  return (
    <>
      <div
        style={{
          ...notification_common,
          ...notification_contents_common,
        }}
      >
        {value}
      </div>
      <div style={notification_accept_navigate_room}>
        {/* TODO: onClick 작성 */}
        <button
          style={notification_accept_navigate_room_btn}
          onClick={onClickNavigateToStudyRoom}
        >
          스터디룸 바로가기
        </button>
      </div>
    </>
  );
};

export default NotificationAccept;
