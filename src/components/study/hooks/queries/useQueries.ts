import { useQuery } from '@tanstack/react-query';
import { studyList } from '../../api';

//스터디 목록 가져오기
const useStudyListQuery = () => {
  const { data, isLoading } = useQuery(['study-list'], studyList, {});
  return { data, isLoading };
};
export { useStudyListQuery };
