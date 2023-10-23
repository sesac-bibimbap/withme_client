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

export const studyList = async (limit: number, offset: number, filter = '') => {
  let url = `/studies/offset?limit=${limit}&offset=${offset}`;
  if (filter !== '') {
    url = `/studies/offset?limit=${limit}&offset=${offset}&filter=${filter}`;
  }
  const { data } = await API({
    method: 'get',
    url: url,
  });
  const isFilter = url.includes('filter') ? true : false;

  return { data, isFilter };
};

export const studyBookMark = async (id?: number) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${id}/bookmark`,
  });
  return data;
};
