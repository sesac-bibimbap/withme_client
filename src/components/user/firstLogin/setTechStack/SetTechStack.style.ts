import { CSSProperties } from 'react';

export const setTechStack_container: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '360px',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
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
  padding: '10px',
};

export const setTechStack_title: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'white',
  marginBottom: '10px',
};

export const setTechStack_comment: CSSProperties = {
  fontSize: '12px',
  color: 'white',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: '20px',
  marginTop: '20px',
};

export const setTechStack_charcoal_btn: CSSProperties = {
  marginRight: '5px',
  fontSize: '14px',
};

export const setTechStack_yellow_btn: CSSProperties = {
  marginLeft: '5px',
  color: '#222121',
  fontWeight: 'bold',
};

export const setTechStack_btn_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};
