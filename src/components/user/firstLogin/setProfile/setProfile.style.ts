import { CSSProperties } from 'react';

export const setProfile_container: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '360px',
};

export const setProfile_title: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  color: 'white',
  marginBottom: '20px',
};

export const setProfile_comment: CSSProperties = {
  fontSize: '12px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: '15px',
  marginTop: '15px',
};

export const setProfile_label: CSSProperties = {
  color: 'white',
  fontWeight: 'bold',
};

export const setProfile_warning: CSSProperties = {
  fontSize: '10px',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  marginLeft: '15px',
};

export const radio_wrapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

export const setProfile_radioBtn: CSSProperties = {
  width: '80px',
  height: '30px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  margin: '0 15px 0 25px',
};

export const setProfile_setBtn: CSSProperties = {
  width: '100px',
  height: '40px',
  backgroundColor: '#F6C54D',
  borderColor: 'transparent',
  color: 'inherit',
  fontSize: '16px',
  fontWeight: '500',
};

// .form_radio_btn input[type=radio] {
//     display: none;
// }
// .form_radio_btn label {
//     display: block;
//     border-radius: 10px;
//        margin: 0 auto;
//     text-align: center;
//     height: -webkit-fill-available;
//     line-height: 45px;
// }

// /* Checked */
// .form_radio_btn input[type=radio]:checked + label {
//     background: #184DA0;
//     color: #fff;
// }

// /* Hover */
// .form_radio_btn label:hover {
//     color: #666;
// }

// /* Disabled */
// .form_radio_btn input[type=radio] + label {
//     background: #F9FAFC;
//     color: #666;
// }
