import React from 'react'

interface LoginContainerProps {
  children: React.ReactNode
}

const LoginContainer = ({ children }: LoginContainerProps) => {
  return (
    <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {children}
    </div>
  )
}

export default LoginContainer
