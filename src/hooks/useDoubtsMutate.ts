import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createDoubt } from '../services/requests'

export function useDoubtMutate() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: createDoubt,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data'] })
      toast.success('Dúvida criada com sucesso.')
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao criar a dúvida, Tente novamente.')
    },
  })

  return mutate
}
