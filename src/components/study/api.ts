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

export const studyList = async (limit: number, offset: number) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/offset?limit=${limit}&offset=${offset}`,
  });
  return data;
};

export const studyBookMark = async (id: number) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${id}/bookmark`,
  });
  return data;
};
