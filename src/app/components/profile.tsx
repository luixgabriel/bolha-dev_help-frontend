import Image from 'next/image'
import React from 'react'
import { getUser } from '../../utils/decode'

const Profile = () => {
  const { imageUrl } = getUser()
  console.log(imageUrl)
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={imageUrl as string}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
    </div>
  )
}

export default Profile
