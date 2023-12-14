import { useQuery } from '@tanstack/react-query'
import { fetchAnswerById } from '../services/requests'

export function useAnswersDataById(id: string) {
  const query = useQuery({
    queryFn: () => fetchAnswerById(id),
    queryKey: ['answers-data-by-id', id],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data as any,
  }
}
