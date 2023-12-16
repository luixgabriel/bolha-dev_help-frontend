import { useDarkMode } from '../../../hooks/useDarkMode'

interface LoginContainerProps {
  children: React.ReactNode
}

const LoginContainer = ({ children }: LoginContainerProps) => {
  const { darkMode } = useDarkMode()
  return (
    <div
      className={`flex min-h-full flex-col h-screen px-6 py-6 lg:px-8 mx-auto w-screen lg:items-center ${
        darkMode && 'bg-blak text-white'
      }`}
    >
      {children}
    </div>
  )
}

export default LoginContainer
