import { useQuery } from '@tanstack/react-query';
import { techStacks } from '../../api';
import { studyList } from '../../api';
import { useEffect } from 'react';

//스터디 목록 가져오기
const useStudyListQuery = (limit: number, offset: number, filter: string) => {
  const { data, isLoading, state } = useQuery<Studies | undefined>(
    ['studyList', limit, offset, filter],
    () => studyList(limit, offset, filter),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {}, [filter]);
  return { data, isLoading, state };
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
