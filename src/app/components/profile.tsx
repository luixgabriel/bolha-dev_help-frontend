import Image from 'next/image'
import defaultImg from '../../assets/imgs/null.png'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useDarkMode } from '../../hooks/useDarkMode'

interface IProfileProps {
  imageUrl: string | null
  name: string
}
const Profile = (props: IProfileProps) => {
  const { darkMode } = useDarkMode()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const userId = Cookies.get('userId')

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('userId')
    window.location.reload()
  }
  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div
      onClick={() => setMenuIsOpen(!menuIsOpen)}
      className="flex items-center gap-3 text-left cursor-pointer"
    >
      <Image
        src={props.imageUrl ? (props.imageUrl as string) : defaultImg}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      {menuIsOpen && (
        <div
          ref={menuRef}
          className={`absolute right-4 top-[54px] mt-2 w-48 ${
            darkMode ? 'bg-blak' : 'bg-white'
          } border border-gray-200 rounded-md shadow-lg z-10`}
        >
          <p className="block w-full text-right px-4 py-1 text-sm border-b-2 text-gray-400 ">
            {props.name}
          </p>
          <div>
            <Link
              href="/publish"
              className={`block w-full text-left px-4 py-2 text-sm ${
                darkMode
                  ? 'text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }  `}
            >
              Publicar Nova Dúvida
            </Link>
            <Link
              href={`/user-doubts?id=${userId}`}
              className={`block w-full text-left px-4 py-2 text-sm ${
                darkMode
                  ? 'text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }  `}
            >
              Minhas Dúvidas
            </Link>
            <Link
              href={`/user-answers?id=${userId}`}
              className={`block w-full text-left px-4 py-2 text-sm ${
                darkMode
                  ? 'text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }  `}
            >
              Minhas Respostas
            </Link>
            <span
              onClick={() => logout()}
              className="block w-full text-left px-4 py-2 text-sm text-red-600  border-t-1 bg-slate-200 hover:text-red-400"
            >
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
