import { CSSProperties } from 'react';

export const studyBookmark_wrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#222121',
  borderRadius: '10px',
  // height: '49%',
  height: '49%',
  width: '95%',
  marginLeft: '23px',
  color: 'white',
};

export const studyBookmark_text_title: CSSProperties = {
  fontSize: '20px',
  fontWeight: 600,
  marginTop: '20px',
  marginBottom: '10px',
};

export const studyBookmark_item_scroll: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  overflowY: 'scroll',
  width: '90%',
  marginBottom: '15px',
};
