import { useNavigate } from 'react-router-dom';
import { AuthType } from '../../../types';
import { loginUser } from '../api';
import { ROUTES } from '../../../common/constants';

const useLogin = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = async (loginData: AuthType) => {
    try {
      await loginUser(loginData);

      navigate(ROUTES.MAIN.PATH);
    } catch (err) {
      console.log('로그인 실패');
    }
  };
  return { handleLoginSubmit };
};

export default useLogin;
