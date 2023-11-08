import { useMutation } from '@tanstack/react-query'
import { RegisterData } from '../types/register-schema'
import { toast } from 'react-toastify'
import axios from '../services/axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useAuth } from './useAuth'

const postData = async (data: RegisterData) => {
  console.log(data)
  const response = await axios.post('/auth/register', data)
  return response.data
}

export function useLoginDataMutate() {
  // const { setIsAuthenticated } = useAuth()
  const router = useRouter()
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: (data) => {
      Cookies.set('token', data.token)
      toast.success('Usuário autenticado com sucesso!')
      router.refresh()
    },
    onError: (error) => {
      console.log(error)
      toast.error('Erro ao tentar se cadastrar!')
    },
  })

  return mutate
}
