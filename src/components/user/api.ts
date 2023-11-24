import { API } from '../../common/utils/axiosInstance';

//이메일 인증 요청 post api
export const sendFirstLoginVerifyEmail = async () => {
  const { data } = await API({
    method: 'get',
    url: '/email/first',
  });
  return data;
};
