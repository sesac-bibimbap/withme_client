import { API } from '../../common/utils/axiosInstance';

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

export const emailCheck = async (email: EmailData) => {
  const { data } = await API({
    method: 'post',
    url: '/email',
    data: email,
  });
  return data;
};

export const verifyToken = async (emailTokenData: EmailTokenData) => {
  const { data } = await API({
    method: 'post',
    url: '/email/verify',
    data: emailTokenData,
  });
  return data;
};
