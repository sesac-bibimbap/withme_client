import { CSSProperties } from 'react';
import { Button } from 'antd';
import { darkGrayBtn_button } from './DarkGrayBtn.style';

type darkGrayBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const DarkGrayBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
}: darkGrayBtnType) => {
  const darkGrayBtnCss = {
    ...darkGrayBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={darkGrayBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default DarkGrayBtn;
