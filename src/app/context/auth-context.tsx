import { ReactNode, createContext, useState } from 'react'
import { IUser } from '../../types/user'
import axios from '../../services/axios'
// import { useQuery } from '@tanstack/react-query'
// import { loginWithGithub } from '../../services/requests'

interface IAuthContext {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  user: IUser | null
  setUser: (value: IUser) => void
  signInWithGithub: () => Promise<void>
}

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: AuthContextProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>(null)

  async function signInWithGithub() {
    try {
      const response = await axios.get('/auth')
      console.log(response.data)
      // setIsAuthenticated(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        signInWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
