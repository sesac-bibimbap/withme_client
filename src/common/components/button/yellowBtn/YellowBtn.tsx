import { CSSProperties, MouseEvent } from 'react';
import { Button } from 'antd';
import { yellowBtn_button } from './YellowBtn.style';

type yellowBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
};

const YellowBtn = ({
  children,
  buttonStyle,
  htmlType,
  onClick,
  disabled,
}: yellowBtnType) => {
  const yellowBtnCss = {
    ...yellowBtn_button,
    ...buttonStyle,
  };

  return (
    <>
      <Button
        style={yellowBtnCss}
        htmlType={htmlType}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Button>
    </>
  );
};

export default YellowBtn;
