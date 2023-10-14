import { CSSProperties } from 'react';
import { Button } from 'antd';
import { middleGrayBtn_button } from './MiddleGrayBtn.style';

type middleGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const MiddleGrayBtn = ({
  children,
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
        {children}
      </Button>
    </>
  );
};

export default MiddleGrayBtn;
