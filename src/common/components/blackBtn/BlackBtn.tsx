import { CSSProperties } from 'react';
import { Button } from 'antd';
import { blackBtn_button } from './BlackBtn.style';

type blackBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const BlackBtn = ({ buttonText, htmlType, buttonStyle }: blackBtnType) => {
  const blackBtnCss = {
    ...blackBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={blackBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default BlackBtn;
