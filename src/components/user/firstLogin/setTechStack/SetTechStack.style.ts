import { CSSProperties } from 'react';

export const setTechStack_container: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '360px',
};

export const setTechStack_wrapper: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  overflowY: 'auto',
  width: '17.5rem',
  maxHeight: '17rem',
  backgroundColor: '#000000',
  border: 'none',
  borderRadius: '10px',
};

export const setTechStack_title: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'white',
  marginBottom: '20px',
};

export const setTechStack_comment: CSSProperties = {
  fontSize: '12px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: '20px',
  marginTop: '25px',
};

export const setTechStack_yellowBtn: CSSProperties = {
  width: '100px',
  height: '40px',
  backgroundColor: '#F6C54D',
  borderColor: 'transparent',
  color: '#000000',
  fontSize: '16px',
  fontWeight: '500',
};
