import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../../types';
import { loginUser } from '../api';
import { ROUTES } from '../../../common/constants';
import { useState } from 'react';
import { AxiosError } from 'axios';

const useLogin = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState(``);
  const [popupText, setPopupText] = useState(``);

  const passwdErrText = `비밀번호가 다릅니다.
올바른 비밀번호로 다시 시도해주세요.
`;
  const handleLoginSubmit = async (loginData: AuthType) => {
    try {
      await loginUser(loginData);
      navigate(ROUTES.MAIN.PATH);
    } catch (err) {
      if (err instanceof AxiosError) {
        setPopupTitle('로그인 실패');
        if (err.response?.status) setPopupText(passwdErrText);
        else {
          const errMsg = err.response?.data.message;
          setPopupText(errMsg);
        }
      }
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate(ROUTES.LOGIN.PATH);
  };

  return { handleLoginSubmit, showPopup, closePopup, popupTitle, popupText };
};

export default useLogin;
