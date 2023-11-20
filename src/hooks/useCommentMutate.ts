import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createComment } from '../services/requests'

export function useCommentMutate() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: createComment,
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
