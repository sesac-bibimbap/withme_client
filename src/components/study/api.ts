import { API } from '../../common/utils/axiosInstance';

export const studyList = async () => {
  const { data } = await API({
    method: 'get',
    url: '/studies',
  });
  return data;
};
