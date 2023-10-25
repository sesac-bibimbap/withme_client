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

// 스터디 신청을 했는지 안했는지 여부 체크
export const studyCheck = async (studyId: number | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/attend/check/${studyId}`,
  });
  return data;
};

// 스터디 문의 목록 가져오기
export const studyInquiry = async (studyId: number | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${studyId}/inquiry`,
  });
  return data;
};

//스터디 문의 생성
export const createInquiry = async (
  studyId: number | undefined,
  createInquiryData: Inquiry,
) => {
  const { data } = await API({
    method: 'post',
    url: `/studies/${studyId}/inquiry`,
    data: createInquiryData,
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
  return { data };
};
export const fetchChatData = async (chatRoomId: string) => {
  const { data } = await API({
    method: 'get',
    url: `/chat/${chatRoomId}`,
  });
  return data;
};

export const fetchAnnouncementData = async (studyId: number | undefined) => {
  const { data } = await API({
    method: 'get',
    url: `/studies/${studyId}/announcement`,
  });
  return data;
};

export const createAnnouncement = async (
  studyId: number | undefined,
  contents: { contents: string },
) => {
  const { data } = await API({
    method: 'post',
    url: `studies/${studyId}/announcement`,
    data: contents,
  });
  return data;
};

export const updateAnnouncement = async (
  studyId: number | undefined,
  announcementId: number,
  contents: { contents: string },
) => {
  const { data } = await API({
    method: 'patch',
    url: `studies/${studyId}/announcement/${announcementId}`,
    data: contents,
  });
  return data;
};
