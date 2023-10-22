import { CSSProperties } from 'react';

export const studyList_background: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#222121',
  borderRadius: '10px',
  height: '100%',
  width: '890px',
  color: 'white',
};

export const studyList_input_search: CSSProperties = {
  backgroundColor: '#454343',
  borderRadius: '10px',
  border: 'none',
  height: '47px',
  width: '796px',
  color: '#9F9C9C',
};

export const studyList_item_background: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#454343',
  borderRadius: '10px',
  height: '80%',
  width: '796px',
  marginTop: '40px',
  padding: '15px 0px',
  gap: '12px',
  overflowY: 'scroll',
};
