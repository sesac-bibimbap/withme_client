import { CSSProperties } from 'react';

export const bookmarkBtn_container: CSSProperties = {
  display: 'flex',
  position: 'relative',
};

export const bookmarkBtn_button: CSSProperties = {
  backgroundColor: '#F6C54D',
  width: '186px',
  height: '56px',
  borderColor: 'transparent',
  color: '#222121',
  fontWeight: '600',
  fontSize: '16px',
  borderRadius: '10px',
};

export const bookmarkBtn_bookmark: CSSProperties = {
  position: 'absolute',
  marginLeft: '150px',
  zIndex: '1',
  filter: 'drop-shadow(2px 2px 3px #454343)',
};
