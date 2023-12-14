import React from 'react'

interface LoginContainerProps {
  children: React.ReactNode
}

const LoginContainer = ({ children }: LoginContainerProps) => {
  return (
    <div className="flex min-h-full flex-1 flex-col h-screen justify-center px-6 py-6 lg:px-8 max-w-lg mx-auto">
      {children}
    </div>
  )
}

export default LoginContainer
