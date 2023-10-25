import { useEffect } from 'react';
import { socket } from '../utils/socket';
import { useProfileQuery } from '../../components/auth/hooks/queries/useQueries';

const useSocketConnect = () => {
  const { data, isLoading } = useProfileQuery();

  useEffect(() => {
    if (data) {
      socket.auth = { userId: data.id };
      socket.connect();
    }
  }, [data]);

  return { data, isLoading };
};

export default useSocketConnect;
