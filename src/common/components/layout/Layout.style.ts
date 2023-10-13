import { CSSProperties } from 'react';

export const layout_container: CSSProperties = {
  backgroundColor: '#454343',
  width: '100dvw',
  height: '100dvh',
  display: 'flex',
};

// export const layout_header: CSSProperties = {
//   backgroundColor: '#222121',
//   width: '1440px',
//   height: '52px',
// };

export const layout_sidebar_container: CSSProperties = {
  display: 'flex',
};

// 스터디 목록
export const layout_sidebar_studylist: CSSProperties = {
  backgroundColor: '#222121',
  width: '81px',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // paddingTop: '20px',
};

// 스터디 목록 원
export const layout_sidebar_studylist_circle: CSSProperties = {
  backgroundColor: '#F6C54D',
  width: '45px',
  height: '45px',
  borderRadius: '50px',
  marginTop: '20px',
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
  // width: '100dvw',
  // height: '100dvh',
  // backgroundColor: '#FFFFFF',
  // width: '1148px',
  // height: '972px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};
