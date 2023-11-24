import { Button } from 'antd';
import { charcoalBtn_button } from './CharcoalBtn.style';
import { CSSProperties } from 'react';
import { To, useNavigate } from 'react-router-dom';

type charcoalBtnType = {
  children: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  path?: To;
  disabled?: boolean;
  onClick?: () => Promise<void> | void;
};
const CharcoalBtn = ({
  children,
  htmlType,
  buttonStyle,
  path,
  onClick,
  disabled,
}: charcoalBtnType) => {
  const navigate = useNavigate();
  const charcoalBtnCss = {
    ...charcoalBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button
        disabled={disabled}
        style={charcoalBtnCss}
        htmlType={htmlType}
        onClick={path ? () => navigate(path) : onClick}
      >
        {children}
      </Button>
    </>
  );
};

export default CharcoalBtn;
