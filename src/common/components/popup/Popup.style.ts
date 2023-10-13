import { CSSProperties } from 'react';

export const popup_container: CSSProperties = {
  width: '400px',
  height: '300px',
  backgroundColor: '#454343',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // border: '2px solid #000000',
  boxShadow: '#222121 4px 4px 4px 4px',
};

export const popup_title: CSSProperties = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#FFFFFF',
};

export const popup_textBox: CSSProperties = {
  width: '320px',
  textAlign: 'center',
  marginTop: '30px',
  marginBottom: '30px',
};

export const popup_text: CSSProperties = {
  fontSize: '14px',
  color: '#FFFFFF',
  whiteSpace: 'pre-line',
};

export const popup_button: CSSProperties = {
  marginTop: '30px',
};
