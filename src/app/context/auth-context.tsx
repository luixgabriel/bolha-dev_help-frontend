import { ReactNode, createContext, useState } from 'react'

interface IAuthContext {
  authenticated: boolean
  setAuthenticated: (value: boolean) => void
}

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: AuthContextProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
