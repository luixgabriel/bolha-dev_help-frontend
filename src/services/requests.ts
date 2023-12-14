import Cookies from 'js-cookie'
import { LoginData } from '../types/login-schema'
import { RegisterData } from '../types/register-schema'
import axios from './axios'
import { toast } from 'react-toastify'

const registerData = async (data: RegisterData) => {
  const response = await axios.post('/auth/register', data)
  return response.data
}

const loginData = async (data: LoginData) => {
  const response = await axios.post('/auth/login', data)
  return response.data
}

const fetchDoubts = async () => {
  const response = await axios.get('/doubts')
  return response
}

const fetchDoubtById = async (id: string) => {
  const response = await axios.get(`/doubts/${id}`)
  return response
}

const createAnswer = async (data: {
  description: string
  doubtsId: string
  userId?: string
}) => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  if (userId) data = { ...data, userId }
  const response = await axios.post('answers/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return response
}

const editAnswer = async (args: {
  description?: string
  userId?: string
  answerId: string
}) => {
  const token = Cookies.get('token')
  const data = {
    description: args.description,
  }
  const response = await axios.patch(`answers/${args.answerId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return response
}

const fetchAnswerById = async (id: string) => {
  const response = await axios.get(`/answers/${id}`)
  return response
}

const likeAnswer = async (id: string) => {
  const token = Cookies.get('token')
  if (!token) return toast.error('Você precisa estar autenticado para isso.')
  const userId = Cookies.get('userId')
  if (!userId) return toast.error('Você precisa estar autenticado para isso.')
  const data = { userId }
  const response = await axios.patch(`/answers/like/${id}`, data)
  return response
}

const dislikeAnswer = async (id: string) => {
  const token = Cookies.get('token')
  if (!token) return toast.error('Você precisa estar autenticado para isso.')
  const userId = Cookies.get('userId')
  if (!userId) return toast.error('Você precisa estar autenticado para isso.')
  const data = { userId }
  const response = await axios.patch(`/answers/dislike/${id}`, data)
  return response
}

const createComment = async (data: {
  content: string
  answerId: string
  userId?: string
}) => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  if (userId) data = { ...data, userId }
  const response = await axios.post('comment', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return response
}

const likeComment = async (id: string) => {
  const token = Cookies.get('token')
  if (!token) return toast.error('Você precisa estar autenticado para isso.')
  const userId = Cookies.get('userId')
  if (!userId) return toast.error('Você precisa estar autenticado para isso.')
  const data = { userId }
  const response = await axios.patch(`/comment/like/${id}`, data)

  return response
}

const dislikeComment = async (id: string) => {
  const token = Cookies.get('token')
  if (!token) return toast.error('Você precisa estar autenticado para isso.')
  const userId = Cookies.get('userId')
  if (!userId) return toast.error('Você precisa estar autenticado para isso.')
  const data = { userId }
  const response = await axios.patch(`/comment/dislike/${id}`, data)
  return response
}

const createDoubt = async (data: {
  title: string
  category: string
  description: string
  image?: null | File
  userId?: string
}) => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  const formData = new FormData()
  formData.append('title', data.title)
  formData.append('category', data.category)
  formData.append('description', data.description)
  formData.append('userId', userId as string)
  if (data.image) formData.append('image', data.image)
  const response = await axios.post('doubts', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
  return response
}

const editDoubt = async (data: {
  title?: string
  category?: string
  description?: string
  image?: null | File
  userId?: string
  doubtsId: string
}) => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  const formData = new FormData()

  formData.append('title', data.title || '')

  if (data.category) {
    formData.append('category', data.category)
  }
  if (data.description) {
    formData.append('description', data.description)
  }
  if (data.image) formData.append('image', data.image)
  formData.append('userId', userId as string)

  const response = await axios.patch(`doubts/${data.doubtsId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
  return response
}

const deleteDoubt = async (id: string) => {
  const token = Cookies.get('token')
  const response = await axios.delete(`/doubts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

const deleteAnswer = async (id: string) => {
  const token = Cookies.get('token')
  const response = await axios.delete(`/answers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

const fetchDoubtsByUser = async (id: string) => {
  const response = await axios.get(`/doubts/user-doubts/${id}`)
  return response
}

const fetchAnswersByUser = async (id: string) => {
  const response = await axios.get(`/answers/user-answers/${id}`)
  return response
}

export {
  registerData,
  loginData,
  fetchDoubts,
  fetchDoubtById,
  createAnswer,
  likeAnswer,
  dislikeAnswer,
  createComment,
  likeComment,
  dislikeComment,
  createDoubt,
  editDoubt,
  deleteDoubt,
  editAnswer,
  deleteAnswer,
  fetchAnswerById,
  fetchDoubtsByUser,
  fetchAnswersByUser,
}
