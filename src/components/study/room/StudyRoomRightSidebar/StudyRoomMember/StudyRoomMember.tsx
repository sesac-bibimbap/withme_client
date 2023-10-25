import { Fragment } from 'react';
import {
  studyRoomMemberList_member_isConnected,
  studyRoomMemberList_member_list_wrapper,
  studyRoomMemberList_member_nickname,
  studyRoomMemberList_member_profileImg,
  studyRoomMemberList_member_wrapper,
} from '../StudyRoomRightSidebar.style';

const StudyRoomMember = ({ nickname, profileImg, status }: any) => {
  return (
    <Fragment key={nickname}>
      <div style={studyRoomMemberList_member_list_wrapper}>
        <div style={studyRoomMemberList_member_wrapper}>
          <img
            style={studyRoomMemberList_member_profileImg}
            src={profileImg}
            alt="프로필이미지"
          />
          <div style={studyRoomMemberList_member_nickname}>{nickname}</div>
        </div>
        <div style={studyRoomMemberList_member_isConnected(status)}>
          {status ? 'on' : 'off'}
        </div>
      </div>
    </Fragment>
  );
};

export default StudyRoomMember;
