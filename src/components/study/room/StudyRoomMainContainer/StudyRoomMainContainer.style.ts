import { CSSProperties } from 'react';

export const studyRoom_mainContainer: CSSProperties = {
  width: '78%',
  background: '#222121',
  borderRadius: '10px',
  marginRight: '10px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

export const studyRoom_title: CSSProperties = {
  color: '#ffffff',
  fontSize: '24px',
  padding: '24px',
};

export const studyRoom_mainWrapper: (isChat: boolean) => CSSProperties = (
  isChat: boolean,
) => {
  return {
    height: '100%',
    background: '#454343',
    margin: '0px 10px',
    marginBottom: '20px',
    borderRadius: '10px',
    overflowY: isChat ? 'hidden' : 'scroll',
  };
};

export const studyRoomAnnouncement_container: CSSProperties = {
  color: '#ffffff',
};

export const studyRoomAnnouncement_title: CSSProperties = {
  fontSize: '20px',
  padding: '18px',
};

export const studyRoomAnnouncement_contents_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#222121',
  padding: '20px',
  height: '30px',
  margin: '0px 8px',
  borderRadius: '10px',
};

export const studyRoomAnnouncement_contents_wrapper_left: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  fontWeight: '500',
  width: '85%',
};

export const studyRoomAnnouncement_contents_wrapper_right: CSSProperties = {
  fontSize: '14px',
  border: 'none',
  background: '#222121',
  color: '#ffffff',
  cursor: 'pointer',
};

// StudyRoomInfo
export const studyRoomInfo_container: CSSProperties = {
  color: '#ffffff',
};
export const studyRoomInfo_title: CSSProperties = {
  fontSize: '20px',
  marginTop: '10px',
  padding: '18px',
};
export const studyRoomInfo_wrapper: CSSProperties = {
  // display: 'flex',
  // justifyContent: 'space-between',
  background: '#222121',
  padding: '16px',
  margin: '0px 8px',
  borderRadius: '10px',
};
export const studyRoomInfo_contents_title: CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0px',
};
export const studyRoomInfo_contents: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  gap: '10px',
};
export const studyRoomInfo_contents_techStacks: CSSProperties = {
  display: 'flex',
  gap: '5px',
};
export const studyRoomInfo_contents_detail: CSSProperties = {
  padding: '5px',
};
export const studyRoomInfo_contents_detail_content: CSSProperties = {
  padding: '13px 5px',
  paddingBottom: '0px',
};
