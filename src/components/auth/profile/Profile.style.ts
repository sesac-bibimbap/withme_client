import { CSSProperties } from 'react';

export const profile_container: CSSProperties = {
  // width: '500px',
  // height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100dvh',
  backgroundColor: '#000000',
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

export const profile_image_circle: CSSProperties = {
  width: '70px',
  height: '70px',
  border: '3px solid red',
  borderRadius: '70px',
};

export const profile_text_name: CSSProperties = {
  fontSize: '28px',
  fontWeight: 600,
  marginTop: '15px',
};

export const profile_detail_wrapper: CSSProperties = {
  // 피그마에 있는 넓이랑 달라짐
  // width: '327px',
  width: '300px',
  height: '285px',
  backgroundColor: '#222121',
  flexDirection: 'column',
  color: 'white',
  borderRadius: '20px',
  marginTop: '10px',
  fontSize: '16px',
  padding: '25px',
};

export const profile_detail_margin: CSSProperties = {
  marginBottom: '20px',
};

export const profile_detail_title: CSSProperties = {
  float: 'left',
  fontWeight: 600,
  width: '59px',
  marginRight: '25px',
  fontSize: '16px',
};

export const profile_button_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '370px',
  marginTop: '20px',
};
