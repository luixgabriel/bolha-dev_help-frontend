import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'

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
    Cookies.remove('darkMode')
  }

  useEffect(() => {
    const isDarkMode = Cookies.get('darkMode')
    if (isDarkMode) setDarkMode(true)
    if (darkMode === true) {
      Cookies.set('darkMode', 'true')
    }
  }, [darkMode])
  return (
    <DarkModeContext.Provider value={{ darkMode, handleChange }}>
      {children}
    </DarkModeContext.Provider>
  )
}
