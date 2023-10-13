import { API } from '../../common/utils/axiosInstance';
import { AuthType } from '../../types';

export const loginUser = async (loginData: AuthType) => {
  const { data } = await API({
    method: 'post',
    url: '/auth',
    data: loginData,
  });
  return data;
};

export const registerUser = async (registerData: AuthType) => {
  const { data } = await API({
    method: 'post',
    url: '/users',
    data: registerData,
  });
  return data;
};

export const userProfile = async () => {
  const { data } = await API({
    method: 'get',
    url: '/users/req-user',
  });
  return data;
};
