import { API } from '../../common/utils/axiosInstance';

export const acceptAttend = async (fromUserStudyData: FromUserStudyType) => {
  const { data } = await API({
    method: 'post',
    url: 'studies/attend/accept',
    data: fromUserStudyData,
  });
  return data;
};
