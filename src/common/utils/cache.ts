import { useQueryClient } from '@tanstack/react-query';

const useCacheInstance = () => {
  const cache = useQueryClient();

  return { cache };
};

export default useCacheInstance;
