import { Moon, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="w-screen px-3 py-2 flex items-center justify-between">
      <Link href="/">
        <h1 className="font-black text-2xl">bolha dev_help</h1>
      </Link>
      <div className="flex items-center justify-center gap-4 mx-2">
        <Search size={20} className="sm:hidden cursor-pointer" />
        <input
          type="text"
          placeholder="Qual é a sua dúvida?"
          className="text-sm bg-transparent rounded-md px-3 py-1 border border-black hidden sm:inline-block"
        />

        <Moon size={20} />
        <span className="font-black text-1xl cursor-pointer">
          <Link href="/login">Entrar</Link>
        </span>
      </div>
    </header>
  )
}

export default Header
