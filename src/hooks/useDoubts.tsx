import { useQuery } from '@tanstack/react-query'
import axios from '../services/axios'

const fetchData = async () => {
  const response = axios.get('/doubts')
  return response
}

export function useDoubtsData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['doubts-data'],
    retry: 2,
  })

  return {
    ...query,
    data: query.data?.data,
  }
}
