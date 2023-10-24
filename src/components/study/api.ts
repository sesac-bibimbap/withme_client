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
    url: 'tech-stacks',
    data: techStacks,
  });
  return data;
};

// 스터디 상세 페이지
export const studyDetail = async (studyId: number | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${studyId}`,
  });
  return data;
};

// 스터디 수정
export const editStudy = async (
  studyId: number | undefined,
  editStudyData: CreateStudyType,
) => {
  const { data } = await API({
    method: 'patch',
    url: `/studies/${studyId}`,
    data: editStudyData,
  });
  return data;
};
