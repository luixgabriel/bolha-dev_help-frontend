'use client'
import Image from 'next/image'
import doubts from '../../data/doubts'
import defaultImg from '../../assets/imgs/null.png'
import { IDoubts } from '../../types/doubts'
import orderRelevantDoubts from '../../utils/orderRelevantDoubts'
import {
  ArrowRight,
  CircleEllipsis,
  MessageSquare,
  MoreHorizontal,
} from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'

const Page = () => {
  const screenWidht = useWindowSize()
  return (
    <div className="bg-red w-screen flex flex-col items-center">
      {orderRelevantDoubts(doubts).map((item: IDoubts) => (
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
          <div className="flex gap-2">
            <span className="flex gap-1">
              <MessageSquare className="cursor-pointer" />
              {item.Answers ? item.Answers.length : item.Answers}
            </span>
            <ArrowRight className="cursor-pointer" />
            <CircleEllipsis />
          </div>
          <div>
            <button>editar</button>
            <button>excluir</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
