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
  Pencil,
  X,
} from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'
import LoadingScreen from '../components/containers/loading-screen'
import { useDoubtsDataByUser } from '../../hooks/useDoubtsByUser'

const Page = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data, isLoading } = useDoubtsDataByUser(searchParams.id)
  const screenWidht = useWindowSize()

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <div className="bg-red w-screen mt-7 flex flex-col items-center">
      {orderRelevantDoubts(data).map((item: IDoubts) => (
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
            {(screenWidht as number) < 700
              ? truncateText(item.title, 35)
              : item.title}
          </p>
          <div className="flex gap-2 items-center">
            <span className="flex gap-1">
              <MessageSquare className="cursor-pointer" />
              {item.Answers ? item.Answers.length : item.Answers}
            </span>
            {(screenWidht as number) < 700 ? (
              <>
                {' '}
                <Pencil />
                <X />
              </>
            ) : (
              <>
                <ArrowRight />
                <button className="bg-green-300 p-2 rounded-md shadow-md flex justify-center items-center gap-1">
                  Editar
                  <Pencil size={17} />
                </button>
                <button className="bg-red-300 p-2 rounded-md shadow-md flex justify-between items-center gap-1">
                  Deletar
                  <X size={17} />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
