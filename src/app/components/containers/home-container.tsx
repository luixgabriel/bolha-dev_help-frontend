import React from 'react'

interface HomeContainerProps {
  children: React.ReactNode
}

const HomeContainer = ({ children }: HomeContainerProps) => {
  return <div className="w-screen h-screen flex justify-center">{children}</div>
}

export default HomeContainer
