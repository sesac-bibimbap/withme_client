import {
  popup_container,
  popup_textBox,
  popup_text,
  popup_title,
} from './Popup.style';
import YellowBtn from '../yellowBtn/YellowBtn';

type popupType = {
  popupTitle: string;
  popupText: string;
};

const Popup = ({ popupTitle, popupText }: popupType) => {
  return (
    <>
      <div style={popup_container}>
        <p style={popup_title}>{popupTitle}</p>
        <div style={popup_textBox}>
          <span style={popup_text}>{popupText}</span>
        </div>
        <YellowBtn buttonText="확인" />
      </div>
    </>
  );
};

export default Popup;
