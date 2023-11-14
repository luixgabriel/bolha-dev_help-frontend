'use client'
import Image from 'next/image'
import doubts from '../../data/doubts'
import { useDoubtsDataById } from '../../hooks/useDoubtsById'

const Doubts = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useDoubtsDataById(searchParams.id)
  const exampleDoubt = doubts[1]
  return (
    <div className="w-screen bg-green-600">
      <div className="flex items-center gap-3 p-3 border justify-between border-black">
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
        <span>12/12/2012</span>
      </div>
      <div>
        <span>- {exampleDoubt.category}</span>
        <h1>{exampleDoubt.title}</h1>
        <p>{exampleDoubt.description}</p>
      </div>
    </div>
  )
}

export default Doubts
