import { useQuery } from '@tanstack/react-query'
import { fetchDoubtBySearch } from '../services/requests'
import { IDoubts } from '../types/doubts'

export function useDoubtsBySearch(searchTerm: string) {
  const query = useQuery({
    queryFn: () => fetchDoubtBySearch(searchTerm),
    queryKey: ['doubts-data-by-searchTerm', searchTerm],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data as IDoubts[],
  }
}
