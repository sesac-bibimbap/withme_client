import { CSSProperties, MouseEvent } from 'react';
import { Button } from 'antd';
import { darkGrayBtn_button } from './DarkGrayBtn.style';

type darkGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const DarkGrayBtn = ({
  children,
  htmlType,
  buttonStyle,
  onClick,
}: darkGrayBtnType) => {
  const darkGrayBtnCss = {
    ...darkGrayBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={darkGrayBtnCss} htmlType={htmlType} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default DarkGrayBtn;
