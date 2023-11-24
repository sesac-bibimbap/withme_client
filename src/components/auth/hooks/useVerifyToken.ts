import { useState, Dispatch } from 'react';
import { verifyFirstLoginToken, verifyToken } from '../api';
import {
  TOKEN_VERIFIED_TEXT,
  TOKEN_VERIFIED_TITLE,
} from '../../../common/constants/auth';
import { ROUTES } from '../../../common/constants';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const useVerifyToken = ({
  setCheckEmailToken,
  firstLogin,
  setCurrent,
}: {
  setCheckEmailToken: Dispatch<React.SetStateAction<string>>;
  firstLogin?: any;
  setCurrent?: any;
}) => {
  const navigate = useNavigate();
  const [popupTitle, setPopupTitle] = useState(``);
  const [popupText, setPopupText] = useState(``);
  const [showPopup, setShowPopup] = useState(false);

  const onClickSendEmailToken = async (emailTokenData: EmailTokenData) => {
    const { token } = emailTokenData;
    // FIXME: 숫자만 입력되게 하거나, 문자입력시에 처리가 수정되어야함
    try {
      if (isNaN(Number(token))) {
        setCheckEmailToken('숫자만 입력해주세요.');
        return;
      }
      if (token.length !== 6) {
        setCheckEmailToken('6자리 모두 입력해주세요.');
        return;
      }
      if (firstLogin) {
        await verifyFirstLoginToken(emailTokenData);
        alert('이메일 인증에 성공했습니다.');
        setCurrent((prev: number) => prev + 1);
      } else {
        await verifyToken(emailTokenData);
        setPopupTitle(TOKEN_VERIFIED_TITLE);
        setPopupText(TOKEN_VERIFIED_TEXT);
        setShowPopup(true);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        err.response?.data;
        setPopupText(err.response?.data.message);
        setShowPopup(true);
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    popupTitle && navigate(ROUTES.LOGIN.PATH);
  };

  return {
    popupTitle,
    popupText,
    showPopup,
    onClickSendEmailToken,
    closePopup,
  };
};

export default useVerifyToken;
