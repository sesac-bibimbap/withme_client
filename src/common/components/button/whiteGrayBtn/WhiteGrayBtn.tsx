import { CSSProperties } from 'react';
import { Button } from 'antd';
import { whiteGrayBtn_button } from './WhiteGrayBtn.style';

type whiteGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  disabled?: boolean;
};

const WhiteGrayBtn = ({
  children,
  htmlType,
  buttonStyle,
  disabled,
}: whiteGrayBtnType) => {
  const whiteGrayBtnCss = {
    ...whiteGrayBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={whiteGrayBtnCss} htmlType={htmlType} disabled={disabled}>
        {children}
      </Button>
    </>
  );
};

export default WhiteGrayBtn;
