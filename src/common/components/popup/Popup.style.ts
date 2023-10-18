import { CSSProperties } from 'react';

export const popup_back: CSSProperties = {
  minHeight: '100dvh',
  minWidth: '100dvw',
  backgroundColor: '#222121',
  opacity: '0.9',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

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
  boxShadow: '2px 2px 5px 5px rgb(0, 0, 0, 0.2)',
  zIndex: '1',
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
