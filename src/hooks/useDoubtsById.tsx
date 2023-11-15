import { useQuery } from '@tanstack/react-query'
import { fetchDoubtById } from '../services/requests'
import { IDoubts } from '../types/doubts'

export function useDoubtsDataById(id: string) {
  const query = useQuery({
    queryFn: () => fetchDoubtById(id),
    queryKey: ['doubts-data-by-id', id],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data as IDoubts,
  }
}
