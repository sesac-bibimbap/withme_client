import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailCheck } from '../api';
import { ROUTES } from '../../../common/constants';
import { AxiosError } from 'axios';

const useCheckAndSendEmail = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onSubmitCheckAndSendEmail = async (email: EmailData) => {
    try {
      const data = await emailCheck(email);
      navigate(ROUTES.RESET_PASSWORD_CHECK.PATH, { state: { data } });
    } catch (err) {
      if (err instanceof AxiosError) setErrorMsg(err.response?.data.message);
    }
  };

  const onChangeEmailInput = () => errorMsg && setErrorMsg('');

  return { errorMsg, onSubmitCheckAndSendEmail, onChangeEmailInput };
};

export default useCheckAndSendEmail;
