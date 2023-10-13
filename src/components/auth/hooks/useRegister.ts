import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../../types';
import { registerUser } from '../api';
import { ROUTES } from '../../../common/constants';
import { useState } from 'react';
import { AxiosError } from 'axios';

const useRegister = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState(``);
  const [popupText, setPopupText] = useState(``);
  const [status, setStatus] = useState(0);

  const popSuccessText = `회원가입이 성공적으로 완료되었습니다.
  로그인 후 이용해주세요.
  `;

  const handleRegisterSubmit = async (registerData: AuthType) => {
    try {
      const data = await registerUser(registerData);
      setStatus(data.statusCode);
      setPopupTitle('회원가입 완료');
      setPopupText(popSuccessText);
      setShowPopup(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        const errMsg = err.response?.data.message;
        setPopupTitle('회원가입 실패');
        setPopupText(errMsg);
      }
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    status === 200
      ? navigate(ROUTES.LOGIN.PATH)
      : navigate(ROUTES.REGISTER.PATH);
  };

  return { handleRegisterSubmit, showPopup, closePopup, popupTitle, popupText };
};

export default useRegister;
