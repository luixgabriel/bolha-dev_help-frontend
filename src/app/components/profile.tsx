import Image from 'next/image'
import defaultImg from '../../assets/imgs/null.png'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'

const Profile = ({ imageUrl }: { imageUrl: string | null }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const logout = () => {
    Cookies.remove('token')
    window.location.reload()
  }
  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      console.log(menuIsOpen)
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
        src={imageUrl ? (imageUrl as string) : defaultImg}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full cursor-pointer"
      />
      {menuIsOpen && (
        <div
          ref={menuRef}
          className="absolute right-3 top-[54px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        >
          <div>
            <span className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Publicar Nova Dúvida
            </span>
            <span className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Minhas Dúvidas
            </span>
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
