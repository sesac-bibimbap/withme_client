import {
  popup_container,
  popup_textBox,
  popup_text,
  popup_title,
} from './Popup.style';
import YellowBtn from '../button/yellowBtn/YellowBtn';

type popupType = {
  popupTitle: string;
  popupText: string;
  onClose?: () => void;
};

const Popup = ({ popupTitle, popupText, onClose }: popupType) => {
  return (
    <>
      <div style={popup_container}>
        <p style={popup_title}>{popupTitle}</p>
        <div style={popup_textBox}>
          <span style={popup_text}>{popupText}</span>
        </div>
        <YellowBtn onClick={onClose}>{'확인'}</YellowBtn>
      </div>
    </>
  );
};

export default Popup;
