import { CSSProperties } from 'react';
import { Button } from 'antd';
import { whiteGrayBtn_button } from './WhiteGrayBtn.style';

type whiteGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const WhiteGrayBtn = ({
  children,
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
        {children}
      </Button>
    </>
  );
};

export default WhiteGrayBtn;
