import { CSSProperties } from 'react';
import { Button } from 'antd';
import { middleGrayBtn_button } from './MiddleGrayBtn.style';

type middleGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  setShowInput?: (isOpen: React.SetStateAction<boolean>) => void;
  AnswerDataSubmit?: () => void;
};

const MiddleGrayBtn = ({
  children,
  htmlType,
  buttonStyle,
  setShowInput,
  AnswerDataSubmit,
}: middleGrayBtnType) => {
  const middleGrayBtnCss = {
    ...middleGrayBtn_button,
    ...buttonStyle,
  };

  const handleAnswerInput = () => {
    if (setShowInput) setShowInput((prev) => !prev);
    if (AnswerDataSubmit) AnswerDataSubmit();
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
