'use client'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import Cookies from 'js-cookie'
import ContainerMain from './components/containers/container-main'
import homeImg from '../assets/imgs/main.png'
import Image from 'next/image'
import DoubtsList from './components/doubts-list'
import HomeContainer from './components/containers/home-container'

export default function Home() {
  const { setIsAuthenticated } = useAuth()
  const token = Cookies.get('token')

  useEffect(() => {
    if (token) setIsAuthenticated(true)
  }, [])

  return (
    <ContainerMain>
      <div className="flex flex-col items-center mt-14 w-screen">
        <h1 className="text-lg text-center overflow-hidden">
          Ajudar alguém em necessidade é um privilégio que todos nós temos.
        </h1>
        <Image src={homeImg} width={500} alt="girl running" />
      </div>
      <HomeContainer>
        <DoubtsList />
      </HomeContainer>
    </ContainerMain>
  )
}
