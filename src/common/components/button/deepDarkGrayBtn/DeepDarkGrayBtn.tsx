import { CSSProperties } from 'react';
import { Button } from 'antd';
import { deepDarkGrayBtn_button } from './DeepDarkGrayBtn.style';

type deepDarkGrayBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const DeepDarkGrayBtn = ({
  children,
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
        {children}
      </Button>
    </>
  );
};

export default DeepDarkGrayBtn;
