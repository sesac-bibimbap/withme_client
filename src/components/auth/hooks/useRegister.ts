import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../../types';
import { registerUser } from '../api';
import { ROUTES } from '../../../common/constants';
import { useState } from 'react';
import { AxiosError } from 'axios';

const useRegister = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const exsistPwText = ``;

  const handleRegisterSubmit = async (registerData: AuthType) => {
    try {
      await registerUser(registerData);
      // setPopupText = ('회원가입이 성공적으로 완료되었습니다
      // 로그인 후 이용해주세요')
      setShowPopup(true);
    } catch (err: AxiosError) {
      const errStatus = err.response.status;
      const errMsg = err.response.data.message;
      switch (errStatus) {
        case 409:
      }

      //TODO: 409 이미 존재하는 이메일,
      console.log('회원가입 실패');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate(ROUTES.LOGIN.PATH);
  };

  return { handleRegisterSubmit, showPopup, closePopup, popupTitle, popupText };
};

export default useRegister;
