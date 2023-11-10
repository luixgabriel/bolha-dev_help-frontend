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
      {menuIsOpen && <h1>abriu</h1>}
    </div>
  )
}

export default Profile
