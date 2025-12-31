import { queryOptions } from '@tanstack/react-query';
import { apiClient } from '../apiClient';

export const authQueryOptions = queryOptions({
  queryKey: ['auth', 'session'],
  queryFn: async () => {
    try {
      return await apiClient.user.fetchUser({
        userId: 'me',
      });
    } catch {
      return {
        user: null,
      };
    }
  },
  staleTime: Infinity,
  gcTime: Infinity,
});
