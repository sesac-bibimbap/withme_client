import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../../types';
import { registerUser } from '../api';
import { ROUTES } from '../../../common/constants';

const useRegister = () => {
  const navigate = useNavigate();
  const handleRegisterSubmit = async (registerData: AuthType) => {
    try {
      await registerUser(registerData);
      navigate(ROUTES.LOGIN.PATH);
    } catch (err) {
      console.log('회원가입 실패');
    }
  };
  return { handleRegisterSubmit };
};

export default useRegister;
