import { CSSProperties } from 'react';

export const setProfile_container: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

export const setProfile_title: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'white',
  marginBottom: '20px',
  marginTop: '20px',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};

export const setProfile_form: CSSProperties = {
  width: '100%',
  padding: '0px 50px',
};

export const setProfile_form_item: (marginBottom: number) => CSSProperties = (
  marginBottom,
) => {
  return {
    marginBottom: `${marginBottom}px`,
  };
};

export const setProfile_nickname_input: CSSProperties = {
  height: '45px',
  borderRadius: '10px',
};

export const setProfile_comment: CSSProperties = {
  fontSize: '12px',
  color: 'white',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: '20px',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};

export const setProfile_label: CSSProperties = {
  color: '#FFFFFF',
  marginRight: '15px',
  paddingTop: '30px',
  height: '40px',
  minWidth: '56px',
  textAlign: 'left',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};
export const setProfile_label_gender: CSSProperties = {
  color: '#FFFFFF',
  marginRight: '15px',
  paddingTop: '30px',
  height: '40px',
  minWidth: '56px',
  textAlign: 'left',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};

export const setProfile_warning: CSSProperties = {
  fontSize: '12px',
  color: 'white',
  marginLeft: '75px',
  marginBottom: '5px',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};

export const setProfile_gender: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};

export const setProfile_select: CSSProperties = {
  height: '45px',
};

export const setProfile_btn_form_item: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const setProfile_btn_wrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  animationName: 'SmoothAppear',
  animationDuration: '2s',
  animationTimingFunction: 'ease',
};

export const setProfile_charcoal_btn: CSSProperties = {
  marginRight: '5px',
  fontSize: '14px',
};

export const setProfile_yellow_btn: CSSProperties = {
  marginLeft: '5px',
  color: '#222121',
  fontWeight: 'bold',
};
