import { queryOptions } from '@tanstack/react-query';
import { apiClient } from '../apiClient';

export function getAllTickets() {
  return queryOptions({
    queryKey: ['ticket', 'all'],
    queryFn: async () => {
      try {
        const result = await apiClient.ticket.fetchAllTickets();
        return result;
      } catch {
        throw new Error('Error fetching tickets');
      }
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
