import React from 'react'
import { useDarkMode } from '../../../hooks/useDarkMode'

interface ContainerMainProps {
  children: React.ReactNode
}

const ContainerMain = ({ children }: ContainerMainProps) => {
  const { darkMode } = useDarkMode()
  return (
    <div className={`w-screen ${darkMode && 'bg-blak text-white'}`}>
      {children}
    </div>
  )
}

export default ContainerMain
