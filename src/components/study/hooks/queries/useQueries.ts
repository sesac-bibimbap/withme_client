import { useQuery } from '@tanstack/react-query';
import { techStacks } from '../../api';

// 기술스택 조회하기
const useTechStakQuery = () => {
  const { data, isLoading } = useQuery(['techStacks'], techStacks, {
    staleTime: 5 * 60 * 1000, // 5분
  });
  return { data, isLoading };
};

export { useTechStakQuery };
