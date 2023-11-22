import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createDoubt } from '../services/requests'
import { useRouter } from 'next/navigation'

export function useDoubtMutate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: createDoubt,
    retry: 2,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data'] })
      toast.success('Dúvida criada com sucesso.')
      router.push(`/doubts/?id=${data.data.id}`)
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao criar a dúvida, Tente novamente.')
    },
  })

  return mutate
}
