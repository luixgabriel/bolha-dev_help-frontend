'use client'
import { Moon, Search } from 'lucide-react'
import Cookies from 'js-cookie'
// import { cookies } from 'next/headers'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Profile from './profile'
import { useAuth } from '../../hooks/useAuth'
import axios from '../../services/axios'
import { decodedImage } from '../../utils/decode'
import { IDecoded } from '../../types/decoded'

const Header = () => {
  const [decode, setDecode] = useState<IDecoded | null>(null)
  const { setIsAuthenticated, isAuthenticated } = useAuth()
  const token = Cookies.get('token')

  useEffect(() => {
    async function getDecodeToken() {
      if (token) {
        const response = await axios.post('/api/auth/github/user', { token })
        setDecode(response.data)
        setIsAuthenticated(true)
      }
    }

    getDecodeToken()
  }, [isAuthenticated])

  console.log(decode)

  return (
    <header className="w-screen px-5 py-4  flex items-center justify-between">
      <Link href="/">
        <h1 className="font-black text-lg">bolha dev_help</h1>
      </Link>
      <div className="flex items-center justify-center gap-4 mx-2">
        <Search size={20} className="sm:hidden cursor-pointer" />
        <input
          type="text"
          placeholder="Qual é a sua dúvida?"
          className="text-sm bg-transparent rounded-md px-2 py-1 border border-black hidden sm:inline-block"
        />

        <Moon size={20} />

        {isAuthenticated ? (
          <Profile
            imageUrl={
              decode
                ? decodedImage(decode.imageUrl as string)
                : decodedImage(null)
            }
            name={decode?.name ? decode.name : '...'}
          />
        ) : (
          <span className="text-md font-base scursor-pointer">
            <Link href="/login">Entrar</Link>
          </span>
        )}
      </div>
    </header>
  )
}

export default Header
