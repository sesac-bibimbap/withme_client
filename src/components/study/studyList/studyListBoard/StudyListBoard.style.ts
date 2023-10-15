import { CSSProperties } from 'react';

export const studyList_background: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#222121',
  height: '100%',
  width: '850px',
  color: 'white',
  borderRadius: '10px',
};

export const studyList_button_search: CSSProperties = {
  backgroundColor: '#454343',
  border: 'none',
  height: '47px',
  width: '796px',
  color: '#9F9C9C',
  borderRadius: '10px',
  // '::placeholder': {
  //   color: '#454343',
  // },
};

export const studyList_item_background: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#454343',
  height: '85%',
  width: '796px',
  borderRadius: '10px',
  marginTop: '40px',
  gap: '12px',
};
