import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { editDoubt } from '../services/requests'
import { useRouter } from 'next/navigation'

export function useEditDoubtMutate() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: editDoubt,
    retry: 2,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data'] })
      toast.success('Dúvida editada com sucesso.')
      router.push(`/doubts/?id=${data.data.id}`)
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao editar a dúvida, Tente novamente.')
    },
  })

  return mutate
}
