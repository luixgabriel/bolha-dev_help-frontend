import Image from 'next/image'
import React from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'

const DoubtsList = () => {
  const screenWidht = useWindowSize()
  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <div className="flex gap-2 p-2 rounded-lg bg-gray-300 items-center justify-center w-[90%] my-1">
        <Image
          src="https://avatars.githubusercontent.com/u/70019908?v=4"
          width={40}
          height={40}
          alt="user-icon"
          className="rounded-full cursor-pointer"
        />
        <p className="w-[60%]">
          {(screenWidht as number) < 500
            ? truncateText('Configurando um banco de dados novoooo', 35)
            : 'Configurando um banco de dados novoooo'}
        </p>
        <span className="flex gap-1">
          <MessageSquare />
          12
        </span>
        <ArrowRight />
      </div>
      <div className="flex gap-2 p-2 rounded-lg bg-gray-300 items-center justify-center w-[90%] my-3">
        <Image
          src="https://avatars.githubusercontent.com/u/70019908?v=4"
          width={40}
          height={40}
          alt="user-icon"
          className="rounded-full cursor-pointer"
        />
        <p className="w-[60%]">
          {(screenWidht as number) < 500
            ? truncateText('Configurando um banco de dados novoooo', 35)
            : 'Configurando um banco de dados novoooo'}
        </p>
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
