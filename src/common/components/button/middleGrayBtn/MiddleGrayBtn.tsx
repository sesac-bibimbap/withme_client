import { CSSProperties } from 'react';
import { Button } from 'antd';
import { middleGrayBtn_button } from './MiddleGrayBtn.style';

type middleGrayBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const MiddleGrayBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
}: middleGrayBtnType) => {
  const middleGrayBtnCss = {
    ...middleGrayBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={middleGrayBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default MiddleGrayBtn;
