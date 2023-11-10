import Image from 'next/image'
import defaultImg from '../../assets/imgs/null.png'
import { useState } from 'react'

const Profile = ({ imageUrl }: { imageUrl: string | null }) => {
  const [menuIsOpen, setMenuIsOPen] = useState<boolean>(false)
  return (
    <div
      onClick={() => setMenuIsOPen(true)}
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
        <div className="absolute right-4 top-[54px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Logout
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Publicar Nova Dúvida
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Minhas Dúvidas
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
