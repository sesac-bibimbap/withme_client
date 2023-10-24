import { useQuery } from '@tanstack/react-query';
import { userProfile } from '../api';

// 유저 프로필 가져오기
const useProfileQuery = () => {
  const { data, isLoading } = useQuery(['login-user'], userProfile);
  return { data, isLoading };
};

export { useProfileQuery };
