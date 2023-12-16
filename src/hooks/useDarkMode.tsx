import { useContext } from 'react'
import { DarkModeContext } from '../app/context/dark-context'

export function useDarkMode() {
  return useContext(DarkModeContext)
}
