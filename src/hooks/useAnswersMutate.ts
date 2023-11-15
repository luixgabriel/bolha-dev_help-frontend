import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createAnswer } from '../services/requests'

export function useAnswerMutate() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: createAnswer,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data-by-id'] })
      toast.success('Resposta enviada.')
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao criar resposta.')
    },
  })

  return mutate
}
