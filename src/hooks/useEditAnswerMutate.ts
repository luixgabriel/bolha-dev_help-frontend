import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { editAnswer } from '../services/requests'
import { useRouter } from 'next/navigation'

export function useEditAnswerMutate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: editAnswer,
    retry: 2,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['doubts-data', 'doubts-data-by-id'],
      })
      toast.success('Resposta editada com sucesso.')
      router.push(`/doubts/?id=${data.data.doubtsId}`)
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao editar a resposta, Tente novamente.')
    },
  })

  return mutate
}
