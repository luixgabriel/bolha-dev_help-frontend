import React from 'react'

interface ContainerMainProps {
  children: React.ReactNode
}

const ContainerMain = ({ children }: ContainerMainProps) => {
  return <div className="w-screen">{children}</div>
}

export default ContainerMain
