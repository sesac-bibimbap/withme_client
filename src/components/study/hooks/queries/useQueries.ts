import { useQuery } from '@tanstack/react-query';
import { studyDetail, techStacks } from '../../api';

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

export { useTechStakQuery, useStudyDetail };
