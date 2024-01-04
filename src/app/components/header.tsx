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
import { useDarkMode } from '../../hooks/useDarkMode'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [decode, setDecode] = useState<IDecoded | null>(null)
  const [searchInMobile, setSearchInMobile] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const router = useRouter()
  const { setIsAuthenticated, isAuthenticated } = useAuth()
  const { darkMode, handleChange } = useDarkMode()
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')

  useEffect(() => {
    async function getDecodeToken() {
      if (token) {
        const response = await axios.post('/api/auth/github/user', { token })
        setDecode(response.data)
        if (!userId) Cookies.set('userId', response.data.id)
        setIsAuthenticated(true)
      }
    }
    getDecodeToken()
  }, [isAuthenticated])

  const handleSearch = () => {
    if (searchTerm) {
      router.push(`/search/?filter=${searchTerm}`)
      setSearchTerm('')
      setSearchInMobile(false)
    } else {
      setSearchInMobile(false)
    }
  }

  return (
    <header
      className={`w-screen px-5 py-4  flex items-center justify-between ${
        darkMode ? 'bg-blak text-white' : 'text-dark'
      }`}
    >
      <Link href="/">
        <h1 className="font-black text-lg">bolha dev_help</h1>
      </Link>
      <div className="flex items-center justify-center gap-4 mx-2">
        <Search
          size={20}
          className="sm:hidden cursor-pointer"
          onClick={
            searchInMobile
              ? () => handleSearch()
              : () => setSearchInMobile((prev) => !prev)
          }
        />
        <input
          type="text"
          placeholder="Qual é a sua dúvida?"
          className="text-sm bg-transparent rounded-md px-2 py-1 border border-black hidden sm:inline-block focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />

        <Moon size={20} onClick={handleChange} className="cursor-pointer" />

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
      {searchInMobile && (
        <div className="absolute">
          <input
            type="text"
            placeholder="Qual é a sua dúvida?"
            className={`text-sm ${
              darkMode
                ? 'bg-gray-950 border-white'
                : 'bg-gray-300  border-black '
            } rounded-md px-2 py-1 border focus:outline-none`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </header>
  )
}

export default Header
