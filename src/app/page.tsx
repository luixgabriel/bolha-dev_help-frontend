'use client'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import Cookies from 'js-cookie'
import ContainerMain from './components/containers/container-main'
import homeImg from '../assets/imgs/main.png'
import Image from 'next/image'
import axios from '../services/axios'

export default function Home() {
  const { setIsAuthenticated } = useAuth()

  useEffect(() => {
    async function getGithubToken() {
      const response = await axios.get(
        `https://bolhadev-help.onrender.com/api/auth/github/user`,
        {
          withCredentials: true,
        },
      )
      if (response.data) {
        console.log(response.data)
        Cookies.set('Meutoken', response.data)
      }
    }

    getGithubToken()
  }, [])

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])
  return (
    <ContainerMain>
      <div className="flex flex-col items-center mt-14 w-screen ">
        <h1 className="text-lg text-center overflow-hidden">
          Ajudar alguém em necessidade é um privilégio que todos nós temos.
        </h1>
        <Image src={homeImg} width={500} alt="girl running" />
      </div>
    </ContainerMain>
  )
}
