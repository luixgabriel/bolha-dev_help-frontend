import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { deleteDoubt } from '../services/requests'

export function useDeleteDoubtMutate() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: deleteDoubt,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['doubts-data-by-user'],
      })
      toast.success('Dúvida deletada com sucesso.')
      // window.location.reload()
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao deletar a dúvida, Tente novamente.')
    },
  })

  return mutate
}
