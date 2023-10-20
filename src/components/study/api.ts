import { API } from '../../common/utils/axiosInstance';

export const createStudy = async (createStudyData: CreateStudyType) => {
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
    url: '/tech-stacks',
  });
  return data;
};

// 스터디 상세 페이지
export const studyDetail = async (studyId: string | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${studyId}`,
  });
  return data;
};

// 스터디 문의
export const studyInquiry = async (studyId: string | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${studyId}/inquiry`,
  });
  return data;
};
