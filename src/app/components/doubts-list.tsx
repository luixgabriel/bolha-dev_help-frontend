import Image from 'next/image'
import React from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'

const DoubtsList = () => {
  return (
    <div className="">
      <div className="flex gap-4 p-2 rounded-lg bg-gray-300 items-center justify-center">
        <Image
          src="https://avatars.githubusercontent.com/u/70019908?v=4"
          width={40}
          height={40}
          alt="user-icon"
          className="h-10 w-10 rounded-full cursor-pointer"
        />
        <p>Configurando um banco de dados</p>
        <span className="flex gap-1">
          <MessageSquare />
          12
        </span>
        <ArrowRight />
      </div>
    </div>
  )
}

export default DoubtsList
