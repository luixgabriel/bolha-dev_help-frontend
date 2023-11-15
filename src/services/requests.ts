import Cookies from 'js-cookie'
import { LoginData } from '../types/login-schema'
import { RegisterData } from '../types/register-schema'
import axios from './axios'

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

export { registerData, loginData, fetchDoubts, fetchDoubtById, createAnswer }
