import { CSSProperties } from 'react';
import { Button } from 'antd';
import { deepDarkGrayBtn_button } from './DeepDarkGrayBtn.style';

type deepDarkGrayBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const DeepDarkGrayBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
}: deepDarkGrayBtnType) => {
  const deepDarkGrayBtnCss = {
    ...deepDarkGrayBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={deepDarkGrayBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default DeepDarkGrayBtn;
