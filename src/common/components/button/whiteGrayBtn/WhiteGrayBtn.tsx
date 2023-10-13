import { CSSProperties } from 'react';
import { Button } from 'antd';
import { whiteGrayBtn_button } from './WhiteGrayBtn.style';

type whiteGrayBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const WhiteGrayBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
}: whiteGrayBtnType) => {
  const whiteGrayBtnCss = {
    ...whiteGrayBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={whiteGrayBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default WhiteGrayBtn;
