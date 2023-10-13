import { CSSProperties } from 'react';
import { Button } from 'antd';
import { blackBtn_button } from './BlackBtn.style';
import { useNavigate } from 'react-router-dom';

type blackBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  path: string;
};

const BlackBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
  path,
}: blackBtnType) => {
  const navigate = useNavigate();

  const blackBtnCss = {
    ...blackBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button
        style={blackBtnCss}
        htmlType={htmlType}
        onClick={() => navigate(path)}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default BlackBtn;
