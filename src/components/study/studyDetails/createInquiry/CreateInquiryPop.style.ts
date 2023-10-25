import { CSSProperties } from 'react';

export const createInquiryPop_back: CSSProperties = {
  minHeight: '100dvh',
  minWidth: '100dvw',
  backgroundColor: '#222121',
  opacity: '0.9',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const createInquiryPop_container: CSSProperties = {
  width: '500px',
  height: '390px',
  backgroundColor: '#454343',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '2px 2px 5px 5px rgb(0, 0, 0, 0.2)',
  zIndex: '1',
};

export const createInquiryPop_wrap: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
export const createInquiryPop_content_wrap: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const createInquiryPop_title: CSSProperties = {
  marginBottom: '30px',
};

export const createInquiryPop_textarea: CSSProperties = {
  width: '320px',
  height: '140px',
  resize: 'none',
};

export const createInquiryPop_btn: CSSProperties = {
  width: '138px',
  height: '45px',
};

export const createInquiryPop_content_font: CSSProperties = {
  color: '#FFFFFF',
  fontSize: '16px',
  minWidth: '20px',
  marginRight: '10px',
};

export const createInquiryPop_content: CSSProperties = {
  display: 'flex',
};
