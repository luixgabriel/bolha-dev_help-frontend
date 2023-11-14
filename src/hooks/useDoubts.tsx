import { useQuery } from '@tanstack/react-query'
import { fetchDoubts } from '../services/requests'

export function useDoubtsData() {
  const query = useQuery({
    queryFn: fetchDoubts,
    queryKey: ['doubts-data'],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data,
  }
}
