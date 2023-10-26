import { useNavigate } from 'react-router-dom';
import { CharcoalBtn } from '../../../../common/components';
import useStudyState from '../../../../common/store/studyState';
import StudyRoomChatRoomList from './StudyRoomChatRoomList/StudyRoomChatRoomList';
import StudyRoomMemberList from './StudyRoomMember/StudyRoomMemberList';
import {
  studyRoom_rightSidebar_btns_wrapper,
  studyRoom_rightSidebar_charcoal_btn,
  studyRoom_rightSidebar_container,
} from './StudyRoomRightSidebar.style';

const StudyRoomRightSidebar = ({
  data,
  userId,
  userEmail,
}: {
  data: Study;
  userId: string;
  userEmail: string;
}) => {
  const { id } = data;
  const { isChat, chatClose } = useStudyState();
  const navigate = useNavigate();

  const onClickCloseChat = () => chatClose();
  const onClickStudyEdit = (id: number | undefined) => {
    navigate(`/study/edit/${id}`);
  };

  return (
    <>
      <div style={studyRoom_rightSidebar_container}>
        <div>
          <StudyRoomMemberList data={data} userId={userId} />
          <StudyRoomChatRoomList
            studyId={id}
            userId={userId}
            userEmail={userEmail}
          />
        </div>
        <div style={studyRoom_rightSidebar_btns_wrapper}>
          {isChat ? (
            <CharcoalBtn
              buttonStyle={studyRoom_rightSidebar_charcoal_btn}
              onClick={onClickCloseChat}
            >
              스터디정보
            </CharcoalBtn>
          ) : null}
          {/* TODO:  */}
          <CharcoalBtn
            buttonStyle={studyRoom_rightSidebar_charcoal_btn}
            onClick={() => onClickStudyEdit(id)}
          >
            스터디수정
          </CharcoalBtn>
          {/* TODO:  */}
          {/* <CharcoalBtn buttonStyle={studyRoom_rightSidebar_charcoal_btn}>
            일정작성
          </CharcoalBtn> */}
        </div>
      </div>
    </>
  );
};

export default StudyRoomRightSidebar;
