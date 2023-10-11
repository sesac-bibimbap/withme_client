import { Button } from 'antd';
import { charcoalBtn_button } from './CharcoalBtn.style';
import { CSSProperties } from 'react';

type charcoalBtnType = {
  buttonText: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  buttonStyle?: CSSProperties;
};

const CharcoalBtn = ({
  buttonText,
  htmlType,
  buttonStyle,
}: charcoalBtnType) => {
  const charcoalBtnCss = {
    ...charcoalBtn_button,
    ...buttonStyle,
  };
  return (
    <>
      <Button style={charcoalBtnCss} htmlType={htmlType}>
        {buttonText}
      </Button>
    </>
  );
};

export default CharcoalBtn;
