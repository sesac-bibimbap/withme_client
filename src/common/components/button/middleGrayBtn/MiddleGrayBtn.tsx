import { CSSProperties, useState } from 'react';
import { Button } from 'antd';
import { middleGrayBtn_button } from './MiddleGrayBtn.style';

type middleGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  setShowInput?: (setShowInput: boolean) => void;
};

const MiddleGrayBtn = ({
  children,
  htmlType,
  buttonStyle,
  setShowInput,
}: middleGrayBtnType) => {
  const middleGrayBtnCss = {
    ...middleGrayBtn_button,
    ...buttonStyle,
  };

  const handleAnswerInput = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <>
      <Button
        style={middleGrayBtnCss}
        htmlType={htmlType}
        onClick={handleAnswerInput}
      >
        {children}
      </Button>
    </>
  );
};

export default MiddleGrayBtn;
