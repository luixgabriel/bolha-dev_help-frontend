'use client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  CornerDownRightIcon,
  MessagesSquare,
  SendHorizontalIcon,
  ThumbsUp,
} from 'lucide-react'
import defaultImg from '../../assets/imgs/null.png'
import { useDoubtsDataById } from '../../hooks/useDoubtsById'
import DoubtContent from '../components/doubt-content'
import LoadingScreen from '../components/containers/loading-screen'
import TextAreaAnswer from '../components/textarea-answer'
import AnswersList from '../components/answers-list'

const Doubts = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data, isLoading } = useDoubtsDataById(searchParams.id)

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <div className="w-screen  flex flex-col">
      <div className="flex items-center gap-3 p-3 justify-between mt-4 w-[95%] shadow-md self-center rounded-md">
        <div className="flex items-center gap-3">
          <Image
            src={
              data.user.imageUrl ? (data.user.imageUrl as string) : defaultImg
            }
            width={50}
            height={50}
            alt="user-image"
            className="rounded-full"
          />
          <span>{data.user.name}</span>
        </div>
        <span>
          {formatDistanceToNow(new Date(data.createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <DoubtContent
        category={data.category}
        description={data.description}
        title={data.title}
        image={data.image as string}
      />
      <TextAreaAnswer doubtsId={data.id} />
      <div className="p-2 mt-1 mx-1 flex gap-2">
        <MessagesSquare />
        <span>{data.Answers?.length} Respostas</span>
      </div>
      <AnswersList answers={data.Answers} />
    </div>
  )
}

export default Doubts
