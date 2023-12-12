import { useQuery } from '@tanstack/react-query'
import { fetchAnswersByUser } from '../services/requests'
import { IDoubts } from '../types/doubts'

export function useAnswersDataByUser(id: string) {
  const query = useQuery({
    queryFn: () => fetchAnswersByUser(id),
    queryKey: ['doubts-data-by-user', id],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data as any,
  }
}
