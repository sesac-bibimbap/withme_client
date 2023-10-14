import { CSSProperties } from 'react';

// FIXME: 타입 지정
export const notification_collapse: (props: number) => CSSProperties = (
  props,
) => {
  return {
    marginBottom: `${props}px`,
    background: '#222121',
    width: '70%',
  };
};

export const notification_common: CSSProperties = {
  fontSize: '16px',
  color: '#ffffff',
};

// header start ----------------------------------------------
export const notification_header_container: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const notification_header_color_icon: (
  color: string,
) => CSSProperties = (color = '#F6C54D') => {
  return {
    borderRadius: '10px',
    width: '7px',
    height: '7px',
    backgroundColor: color,
  };
};

export const notification_header_left: CSSProperties = {
  display: 'flex',
  gap: '7px',
  alignItems: 'center',
};

export const notification_header_right: CSSProperties = {
  display: 'flex',
  gap: '10px',
};

// contents start ------------------------------------------
export const notification_contents_common: CSSProperties = {
  padding: '20px',
  paddingBottom: '25px',
  paddingTop: '25px',
  marginRight: '5px',
  marginLeft: '5px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderRadius: '5px',
  backgroundColor: '#454343',
};

// Request start --------------------------------------------
export const notification_request_container: CSSProperties = {
  display: 'flex',
};
export const notification_request_title: CSSProperties = {
  minWidth: '100px',
};
export const notification_request_content: CSSProperties = {
  fontSize: '14px',
};
export const notification_request_detail_container: CSSProperties = {
  display: 'flex',
};
export const notification_request_detail_title: CSSProperties = {
  minWidth: '70px',
};
export const notification_request_detail_content: CSSProperties = {};

export const notification_request_common_btn_container: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  gap: '20px',
};

// Accept start ---------------------------------------------
export const notification_accept_navigate_room: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  gap: '20px',
};

export const notification_accept_navigate_room_btn: CSSProperties = {
  width: '180px',
  height: '50px',
  background: '#F6C54D',
  borderRadius: '10px',
  border: '0px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
};

// Reject start ---------------------------------------------
export const notification_reject_container: CSSProperties = {
  display: 'flex',
};
export const notification_reject_title: CSSProperties = {
  minWidth: '100px',
};
export const notification_reject_content: CSSProperties = {
  fontSize: '14px',
};
