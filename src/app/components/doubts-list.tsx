import Image from 'next/image'
import React from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'
import defaultImg from '../../assets/imgs/null.png'
import orderRelevantDoubts from '../../utils/orderRelevantDoubts'
import { useDoubtsData } from '../../hooks/useDoubts'
import { useRouter } from 'next/navigation'

const DoubtsList = () => {
  const { data, isLoading } = useDoubtsData()
  const screenWidht = useWindowSize()
  const router = useRouter()

  const handleNavigate = (id: string) => {
    router.push(`/doubts?id=${id}`)
  }

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold m-5">Dúvidas mais relevantes:</h1>

      {isLoading ? (
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 mb-3"></div>
      ) : (
        orderRelevantDoubts(data).map((item) => (
          <div
            key={item.id}
            className="flex gap-2 p-2 rounded-lg bg-gray-300 items-center justify-center w-[90%] my-1"
          >
            <Image
              src={
                item.user.imageUrl ? (item.user.imageUrl as string) : defaultImg
              }
              width={40}
              height={40}
              alt="user-icon"
              className="rounded-full cursor-pointer"
            />
            <p className="w-[60%]">
              {(screenWidht as number) < 500
                ? truncateText(item.title, 35)
                : item.title}
            </p>
            <span className="flex gap-1">
              <MessageSquare />
              {item.Answers ? item.Answers.length : item.Answers}
            </span>
            <ArrowRight
              onClick={() => handleNavigate(item.id)}
              className="cursor-pointer"
            />
          </div>
        ))
      )}
    </div>
  )
}

export default DoubtsList
