import { CSSProperties } from 'react';

export const emailVerify_container: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100dvh',
  backgroundColor: '#000000',
};

export const emailVerify_showPopup: CSSProperties = {
  position: 'absolute',
  minHeight: '100dvh',
  minWidth: '100dvw',
  backgroundColor: '#222121',
  opacity: '0.9',
};

export const emailVerify_wrapper: CSSProperties = {
  width: '500px',
  height: '500px',
  backgroundColor: '#454343',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '10px',
};

export const emailVerify_title: CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
};

export const emailVerify_retry_underline: CSSProperties = {
  textDecoration: 'underline',
  fontSize: '16px',
  color: 'white',
  backgroundColor: '#454343',
  border: '0',
  cursor: 'pointer',
  marginBottom: '35px',
};

export const emailVerify_comment: CSSProperties = {
  fontSize: '12px',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: '20px',
  marginTop: '35px',
};

export const emailVerify_inputs: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '70%',
};

export const emailVerify_inputs_check = {
  minHeight: '22px',
  color: '#FF4343',
  marginBottom: '10px',
  fontSize: '12px',
};
