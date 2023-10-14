import { Button } from 'antd';
import { charcoalBtn_button } from './CharcoalBtn.style';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

type charcoalBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
  path: string;
};
const CharcoalBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
  path,
}: charcoalBtnType) => {
  const navigate = useNavigate();
  const charcoalBtnCss = {
    ...charcoalBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button
        style={charcoalBtnCss}
        htmlType={htmlType}
        onClick={() => navigate(path)}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default CharcoalBtn;
