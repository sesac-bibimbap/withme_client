import { API } from '../../common/utils/axiosInstance';

export const studyList = async (limit: number, offset: number) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/offset?limit=${limit}&offset=${offset}`,
  });
  return data;
};
