import axios from './axios'

export const loginWithGithub = async (): Promise<any> => {
  const response = await axios.get('/auth')
  return response
}
