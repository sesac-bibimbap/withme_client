import { CSSProperties } from 'react';

export const profile_container: CSSProperties = {
  width: '59%',
  background: '#222121',
  borderRadius: '10px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
};

export const profile_title: CSSProperties = {
  fontWeight: 'bold',
};

export const profile_profileImg_container: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '30px 0px 20px',
};

export const profile_profileImg: CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '50px',
  background: '#F6C54D',
};

export const profileList_container: CSSProperties = {
  overflowY: 'scroll',
};

export const profileList_contents_wrapper = {
  display: 'flex',
};

export const profileList_contents_title: CSSProperties = {
  minWidth: '80px',
  margin: '10px 0px',
};

export const profileList_contents_contents: CSSProperties = {
  margin: '10px 0px',
};

export const profileList_techStacks_wrapper: CSSProperties = {
  display: 'flex',
  gap: '5px',
  padding: '10px 5px',
};

export const profileList_techStacks_tag: CSSProperties = {
  height: '20px',
};
