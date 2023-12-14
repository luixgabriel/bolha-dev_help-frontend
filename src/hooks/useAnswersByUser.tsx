import { useQuery } from '@tanstack/react-query'
import { fetchAnswersByUser } from '../services/requests'

export function useAnswersDataByUser(id: string) {
  const query = useQuery({
    queryFn: () => fetchAnswersByUser(id),
    queryKey: ['answers-data-by-user', id],
    staleTime: 1000 * 60 * 1,
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data as any,
  }
}
