import { useNavigate } from 'react-router-dom';
import { AuthType, RegisterResponse } from '../../../types';
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
      const error = err as AxiosError<RegisterResponse>;
      // if (axios.isAxiosError(err)) {
      if (
        error.response &&
        error.response.data &&
        'message' in error.response.data
      ) {
        setStatus(error.response.status);
        const errMsg: string = error.response.data.message as string;
        setPopupTitle('회원가입 실패');
        setPopupText(errMsg);
      }
      // }
      // switch (status) {
      //   case 409: {
      //     setPopupText(errMsg);
      //     break;
      //   }
      //   case 500: {
      //     setPopupText(errMsg);
      //     break;
      //   }
      // }
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
