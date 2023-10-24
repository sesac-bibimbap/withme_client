import { useQuery } from '@tanstack/react-query';
import { techStacks, studyDetail, studyInquiry } from '../../api';

// 기술스택 조회하기
const useTechStakQuery = () => {
  const { data, isLoading } = useQuery<TechStack[]>(
    ['techStacks'],
    techStacks,
    {
      staleTime: 5 * 60 * 1000, // 5분
    },
  );

  return { data, isLoading };
};

// 스터디 자세히보기
const useStudyDetail = (studyId: number | undefined) => {
  const { data, isLoading } = useQuery<Study>(['studyDetail', studyId], () =>
    studyDetail(studyId),
  );

  return { data, isLoading };
};

// 스터디 문의 목록
const useStudyInquiry = (studyId: string | undefined) => {
  const { data, isLoading } = useQuery<Inquiry[]>(
    ['studyInquiry', studyId],
    () => studyInquiry(studyId),
  );

  return { data, isLoading };
};

export { useTechStakQuery, useStudyDetail, useStudyInquiry };
