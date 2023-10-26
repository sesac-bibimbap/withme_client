import StudyRoomCalendar from './StudyRoomCalendar/StudyRoomCalendar';
import useStudyState from '../../../../common/store/studyState';
import StudyRoomChat from './StudyRoomChat/StudyRoomChat';
import StudyRoomInfo from './StudyRoomInfo/StudyRoomInfo';
import {
  studyRoom_mainContainer,
  studyRoom_mainWrapper,
  studyRoom_title,
} from './StudyRoomMainContainer.style';
import StudyRoomAnnouncement from './StudyRoomAnnouncement/StudyRoomAnnouncement';

const StudyRoomMainContainer = ({ data }: StudyDataType) => {
  const { id, name, owner } = data;
  const { isChat, chatRoomTitle } = useStudyState();

  return (
    <div style={studyRoom_mainContainer}>
      <h1 style={studyRoom_title}>
        {isChat
          ? `#${id} ${chatRoomTitle} 채팅방`
          : `#${id} ${name}의 스터디룸`}
      </h1>
      <div
        className="studyRoom_mainWrapper"
        style={studyRoom_mainWrapper(isChat)}
      >
        {isChat ? (
          <StudyRoomChat studyId={id} />
        ) : (
          <>
            <StudyRoomAnnouncement studyId={id} owner={owner} />
            <StudyRoomInfo data={data} />
            <StudyRoomCalendar />
          </>
        )}
      </div>
    </div>
  );
};

export default StudyRoomMainContainer;
