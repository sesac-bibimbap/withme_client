import { CSSProperties } from 'react';

export const studyRoom_rightSidebar_container: CSSProperties = {
  width: '20%',
  height: '96vh',
  background: '#222121',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
export const studyRoom_rightSidebar_btns_wrapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
  gap: '10px',
};
export const studyRoom_rightSidebar_charcoal_btn: CSSProperties = {
  width: '90%',
  height: '60px',
};

// StudyRoomMemberList
export const studyRoomMemberList_container: CSSProperties = {
  color: '#ffffff',
  padding: '25px',
};
export const studyRoomMemberList_title_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const studyRoomMemberList_title: CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center',
};
export const studyRoomMemberList_count: CSSProperties = {
  marginLeft: '7px',
};
export const studyRoomMemberList_member_container: CSSProperties = {
  marginTop: '10px',
};
export const studyRoomMemberList_member_list_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const studyRoomMemberList_member_wrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '18px',
};
export const studyRoomMemberList_member_profileImg: CSSProperties = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: '#F6C54D',
};
export const studyRoomMemberList_member_nickname: CSSProperties = {};
export const studyRoomMemberList_member_isConnected: (
  isConnected: boolean,
) => CSSProperties = (isConnected: boolean) => {
  return {
    color: isConnected ? '#57835B' : '#454343',
    fontWeight: 'bold',
  };
};

// StudyRoomChatRoomList
export const studyRoomChatRoomList_container: CSSProperties = {
  color: '#ffffff',
  padding: '25px',
};
export const studyRoomChatRoomList_title_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
};
export const studyRoomChatRoomList_title: CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
  border: 'none',
  background: 'transparent',
};
export const studyRoomChatRoomList_title_btn: CSSProperties = {
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
};
export const studyRoomChatRoomList_chatRoom: CSSProperties = {
  fontSize: '18px',
  padding: '5px 0px',
  border: 'none',
  color: '#ffffff',
  background: '#222121',
  display: 'block',
  cursor: 'pointer',
};
export const studyRoomChatRoomList_chatRoom_create: CSSProperties = {
  display: 'flex',
};
