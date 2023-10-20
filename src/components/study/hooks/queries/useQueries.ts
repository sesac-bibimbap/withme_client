import { useQuery } from '@tanstack/react-query';
import { studyList } from '../../api';

//스터디 목록 가져오기
const useStudyListQuery = (limit: number, offset: number) => {
  const { data, isLoading, isFetching } = useQuery(
    ['studyList', limit, offset],
    () => studyList(limit, offset),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  return { data, isLoading, isFetching };
};

export { useStudyListQuery };
