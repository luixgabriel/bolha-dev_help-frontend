'use client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { CircuitBoard } from 'lucide-react'
import testImg from '../../assets/imgs/carbon.png'
import doubts from '../../data/doubts'
import { useDoubtsDataById } from '../../hooks/useDoubtsById'

const Doubts = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useDoubtsDataById(searchParams.id)
  const exampleDoubt = doubts[3]
  const date = new Date(exampleDoubt.createdAt)
  const formatoAmigavel = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  })
  return (
    <div className="w-screen  flex flex-col">
      <div className="flex items-center gap-3 p-3 justify-between mt-4 w-[90%] shadow-md self-center rounded-md">
        <div className="flex items-center gap-3">
          <Image
            src={exampleDoubt.user.imageUrl as string}
            width={50}
            height={50}
            alt="user-image"
            className="rounded-full"
          />
          <span>{exampleDoubt.user.name}</span>
        </div>
        <span>{formatoAmigavel}</span>
      </div>
      <div className="mt-2 p-2 w-screen">
        <span className="text-sm text-gray-400 pl-2 flex items-center gap-1">
          <CircuitBoard /> {exampleDoubt.category}
        </span>
        <div className=" mt-2">
          <h1 className="font-bold text-xl pl-1">{exampleDoubt.title}</h1>
          <p>{exampleDoubt.description}</p>
          <img
            className="mx-auto w-screen"
            src="carbon.png"
            alt="Your Company"
          />
        </div>
      </div>
    </div>
  )
}

export default Doubts
