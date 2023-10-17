import { API } from '../../common/utils/axiosInstance';

export const createStudy = async (createStudyData: createStudyType) => {
  const { data } = await API({
    method: 'post',
    url: '/studies',
    data: createStudyData,
  });
  return data;
};

export const techStacks = async () => {
  const { data } = await API({
    method: 'get',
    url: 'tech-stacks',
    data: techStacks,
  });
  return data;
};
