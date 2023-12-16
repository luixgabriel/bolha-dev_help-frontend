import { createContext, useState, ReactNode } from 'react'

interface IDarkModeContext {
  darkMode: boolean
  handleChange: () => void
}

interface DarkModeContextProps {
  children: ReactNode
}

export const DarkModeContext = createContext({} as IDarkModeContext)

export function DarkModeProvider({ children }: DarkModeContextProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  function handleChange() {
    setDarkMode((prev) => !prev)
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, handleChange }}>
      {children}
    </DarkModeContext.Provider>
  )
}
