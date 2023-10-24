import { useQuery } from '@tanstack/react-query';
import { userProfile } from '../../api';

// 유저 프로필 가져오기
const useProfileQuery = () => {
  const { data, isLoading } = useQuery<User | undefined>(
    ['userProfile'],
    userProfile,
    {
      staleTime: 1 * 60 * 1000, // 1분
    },
  );
  return { data, isLoading };
};

export { useProfileQuery };
