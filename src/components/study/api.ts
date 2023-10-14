import { API } from '../../common/utils/axiosInstance';
import { createStudyType } from '../../types';

export const createStudy = async (createStudyData: createStudyType) => {
  const { data } = await API({
    method: 'post',
    url: '/studies',
    data: createStudyData,
  });
  return data;
};
