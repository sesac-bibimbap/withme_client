import { CSSProperties } from 'react';
import { Button } from 'antd';
import { blackBtn_button } from './BlackBtn.style';
import { useNavigate } from 'react-router-dom';

type blackBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  path: string | number;
};

const BlackBtn = ({ children, htmlType, buttonStyle, path }: blackBtnType) => {
  const navigate = useNavigate();

  const blackBtnCss = {
    ...blackBtn_button,
    ...buttonStyle,
  };

  const handleButtonClick = () => {
    typeof path === 'number' ? navigate(-1) : navigate(path);
  };

  return (
    <>
      <Button
        style={blackBtnCss}
        htmlType={htmlType}
        onClick={handleButtonClick}
      >
        {children}
      </Button>
    </>
  );
};

export default BlackBtn;
