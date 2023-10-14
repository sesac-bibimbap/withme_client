import { Button } from 'antd';
import { yellowBtn_button } from './YellowBtn.style';
import { CSSProperties } from 'react';

type yellowBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  onClick?: () => void;
};

const YellowBtn = ({
  children,
  buttonStyle,
  htmlType,
  onClick,
}: yellowBtnType) => {
  const yellowBtnCss = {
    ...yellowBtn_button,
    ...buttonStyle,
  };

  return (
    <>
      <Button style={yellowBtnCss} htmlType={htmlType} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default YellowBtn;
