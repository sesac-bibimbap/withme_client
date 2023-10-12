import { CSSProperties } from 'react';
import { Button } from 'antd';
import { blackBtn_button } from './BlackBtn.style';

type blackBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const BlackBtn = ({ buttonText, htmlType }: blackBtnType) => {
  return (
    <>
      <Button style={blackBtn_button} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default BlackBtn;
