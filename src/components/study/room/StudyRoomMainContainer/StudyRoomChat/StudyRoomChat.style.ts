import { CSSProperties } from 'react';

export const chatRoom_container: CSSProperties = {
  position: 'relative',
  height: '100%',
  width: '100%',
};
export const chatRoom_send_form: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  width: '98%',
  left: '10px',
};

export const chatMessage_container: CSSProperties = {
  color: '#ffffff',
  display: 'flex',
  padding: '25px',
  paddingBottom: '0px',
};

export const chatMessage_profileImg: CSSProperties = {
  width: '45px',
  height: '45px',
  background: '#F6C54D',
  borderRadius: '45px',
  marginRight: '10px',
};

export const chatMessage_contents_wrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
};
