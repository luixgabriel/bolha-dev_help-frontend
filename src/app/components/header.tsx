import { Moon, Search } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import Profile from './profile'

const Header = () => {
  const isAuthenticated = cookies().has('token')
  return (
    <header className="w-screen px-3 py-3  flex items-center justify-between">
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
          <Profile />
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
