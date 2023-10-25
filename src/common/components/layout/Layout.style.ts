import { CSSProperties } from 'react';

export const layout_container: CSSProperties = {
  backgroundColor: '#454343',
  width: '100dvw',
  height: '100dvh',
  display: 'flex',
};

// 스터디 목록
export const layout_sidebar_studylist: CSSProperties = {
  backgroundColor: '#222121',
  width: '108px',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // paddingTop: '20px',
  overflowY: 'scroll',
};

export const layout_sidebar_icon: CSSProperties = {
  fontSize: '22px',
  marginRight: '10px',
};

// 스터디 목록 원
export const layout_sidebar_studylist_circle: CSSProperties = {
  backgroundColor: '#F6C54D',
  width: '50px',
  height: '50px',
  borderRadius: '70px',
  marginTop: '20px',
  color: '#222121',
  fontWeight: 'bolder',
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// 페이지 탭들
export const layout_sidebar_pageTabs_container: CSSProperties = {
  width: '213px',
  height: '100dvh',
  backgroundColor: '#454343',
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: '16px',
  borderRight: '2px solid #222121',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const layout_sidebar_pageTabs_wrap: CSSProperties = {
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

// 페이지 탭 목록 텍스트 컨테이너
export const layout_sidebar_pageTabs_text: CSSProperties = {
  width: '181px',
  marginTop: '20px',
};

export const layout_sidebar_pageTabs_link: CSSProperties = {
  textDecorationLine: 'none',
  color: '#FFFFFF',
};

// 페이지 탭 아래에 유저 정보
export const layout_sidebar_pageTabs_userInfo: CSSProperties = {
  width: '213px',
  height: '78px',
  backgroundColor: '#222121',
  display: 'flex',
  marginTop: '30px',
  alignItems: 'center',
};

export const layout_sidebar_pageTabs_userInfo_circle: CSSProperties = {
  backgroundColor: '#F6C54D',
  width: '35px',
  height: '35px',
  borderRadius: '50px',
  margin: '0px 10px',
};

// 바뀌어질 페이지 부분
export const layout_contents_container: CSSProperties = {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  padding: '20px',
  width: '100%',
};

export const layout_profile: CSSProperties = {
  width: ' 130px',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '600',
  marginLeft: '5px',
};
