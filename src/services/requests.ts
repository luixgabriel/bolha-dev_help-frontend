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

export { registerData, loginData }
