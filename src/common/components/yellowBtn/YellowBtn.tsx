import { Button } from 'antd';
import { yellowBtn_button } from './YellowBtn.style';
import { CSSProperties } from 'react';

type yellowBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const YellowBtn = ({ buttonText, buttonStyle, htmlType }: yellowBtnType) => {
  const yellowBtnCss = {
    ...yellowBtn_button,
    ...buttonStyle,
  };

  return (
    <>
      <Button style={yellowBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default YellowBtn;
