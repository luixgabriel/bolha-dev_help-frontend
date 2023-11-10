import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { loginData } from '../services/requests'
import { useAuth } from './useAuth'

export function useLoginDataMutate() {
  const router = useRouter()
  const mutate = useMutation({
    mutationFn: loginData,
    retry: 2,
    onSuccess: (data) => {
      Cookies.set('token', data.token)
      toast.success('Usuário autenticado com sucesso!')
      router.push('/')
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao tentar se cadastrar!')
    },
  })

  return mutate
}
