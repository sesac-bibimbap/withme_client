import { useQuery } from '@tanstack/react-query';
import { techStacks } from '../../api';
import { studyList } from '../../api';

//스터디 목록 가져오기
const useStudyListQuery = (limit: number, offset: number) => {
  const { data, isLoading } = useQuery<Studies | undefined>(
    ['studyList', limit, offset],
    () => studyList(limit, offset),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );
  return { data, isLoading };
};

export { useStudyListQuery };

// 기술스택 조회하기
const useTechStakQuery = () => {
  const { data, isLoading } = useQuery(['techStacks'], techStacks, {
    staleTime: 5 * 60 * 1000, // 5분
  });
  return { data, isLoading };
};

export { useTechStakQuery };
