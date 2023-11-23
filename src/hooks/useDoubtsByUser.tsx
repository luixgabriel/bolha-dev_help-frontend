import { useQuery } from '@tanstack/react-query'
import { fetchDoubtsByUser } from '../services/requests'
import { IDoubts } from '../types/doubts'

export function useDoubtsDataByUser(id: string) {
  const query = useQuery({
    queryFn: () => fetchDoubtsByUser(id),
    queryKey: ['doubts-data-by-user', id],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data as IDoubts[],
  }
}
