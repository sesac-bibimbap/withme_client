import { CSSProperties } from 'react';

export const profile_container: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100dvh',
  backgroundColor: '#222121',
};

export const profile_wrapper: CSSProperties = {
  width: '500px',
  height: '600px',
  backgroundColor: '#454343',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '10px',
};

export const profile_button_close: CSSProperties = {
  backgroundColor: 'transparent',
  border: 'none',
  marginLeft: '430px',
};

export const profile_image_circleWrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

export const profile_image_circle: CSSProperties = {
  backgroundColor: '#F6C54D',
  width: '70px',
  height: '70px',
  borderRadius: '50px',
};

export const profile_text_name: CSSProperties = {
  fontSize: '28px',
  fontWeight: 600,
  marginTop: '3px',
  marginLeft: '10px',
};

export const profile_detail_wrapper: CSSProperties = {
  width: '300px',
  height: '285px',
  backgroundColor: '#222121',
  color: 'white',
  borderRadius: '20px',
  marginTop: '10px',
  fontSize: '16px',
  padding: '25px',
  overflowY: 'scroll',
};

export const profile_detail_grid: CSSProperties = {
  display: 'grid',
  gridTemplateRows: '24px',
  gridTemplateColumns: '300px',
  gridRowGap: '20px',
};

export const profile_detail_margin: CSSProperties = {
  marginBottom: '20px',
};

export const profile_detail_hashtag: CSSProperties = {
  display: 'flex',
  marginTop: '20px',
};

export const profile_hashtag_wrapper: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '215px',
};

export const profile_button_hashtag: CSSProperties = {
  fontSize: '11px',
  padding: '0px 2px',
  borderRadius: '5px',
  marginRight: '3px',
  height: '25px',
  marginBottom: '10px',
};

export const profile_detail_title: CSSProperties = {
  float: 'left',
  fontWeight: 600,
  marginRight: '25px',
  fontSize: '16px',
  minWidth: '59px',
};

export const profile_button_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '340px',
  marginTop: '20px',
};
