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

export const studyList = async (limit: number, offset: number, filter = '') => {
  let url = `/studies/offset?limit=${limit}&offset=${offset}`;
  if (filter !== '') {
    url = `/studies/offset?limit=${limit}&offset=${offset}&filter=${filter}`;
  }
  const { data } = await API({
    method: 'get',
    url: url,
  });
  const searchFilter = filter;

  return { data, searchFilter };
};

export const studyBookMark = async (id?: number) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${id}/bookmark`,
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

export const studyCheck = async (studyId: string | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/attend/check/${studyId}`,
  });
  return data;
};

// 스터디 문의
export const studyInquiry = async (studyId: number | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${studyId}/inquiry`,
  });
  return data;
};

// 스터디 문의 답변
export const studyInquiryAnswer = async (
  studyId: number | undefined,
  id: number | undefined,
  studyAnswerData: { contents: string | undefined },
) => {
  console.log(studyId, id, studyAnswerData);

  const { data } = await API({
    method: 'post',
    url: `/studies/${studyId}/inquiry/${id}`,
    data: studyAnswerData,
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
