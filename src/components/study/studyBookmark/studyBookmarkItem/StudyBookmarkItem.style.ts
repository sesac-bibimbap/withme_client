import { CSSProperties } from 'react';

export const bookmarkItem_wrapper: CSSProperties = {
  display: 'flex',
  position: 'relative',
};

export const studyBookmarkItem_button_detail: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#454343',
  borderRadius: '10px',
  width: '250px',
  height: '54px',
  borderColor: 'transparent',
};

export const studyBookmark_text_teamName: CSSProperties = {
  fontSize: '14px',
};

export const studyBookmark_text_techStack: CSSProperties = {
  fontSize: '11px',
  marginTop: '2px',
};

export const studyBookmark_bookmarkBtn_bookmark: CSSProperties = {
  height: '22px',
  position: 'absolute',
  marginLeft: '220px',
  marginTop: '5px',
  zIndex: '1',
  filter: 'drop-shadow(2px 2px 3px #454343)',
};
