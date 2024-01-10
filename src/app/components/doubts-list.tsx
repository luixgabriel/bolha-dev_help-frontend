import Image from 'next/image'
import React from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'
import defaultImg from '../../assets/imgs/null.png'
import orderRelevantDoubts from '../../utils/orderRelevantDoubts'
import { useDoubtsData } from '../../hooks/useDoubts'
import { useRouter } from 'next/navigation'
import { useDarkMode } from '../../hooks/useDarkMode'

const DoubtsList = () => {
  const { data, isLoading } = useDoubtsData()
  const { darkMode } = useDarkMode()
  const screenWidht = useWindowSize()
  const router = useRouter()

  const handleNavigate = (id: string) => {
    router.push(`/doubts?id=${id}`)
  }

  if ((!data && !isLoading) || data?.length === 0) {
    return (
      <div className="w-screen flex justify-center items-center flex-col m-7">
        <h1 className="text-xl font-bold m-5">Dúvidas mais relevantes:</h1>
        <h1 className="font-bold">
          {data?.length === 0
            ? 'Nenhuma dúvida criada ainda, adicione a primeira!'
            : 'Erro ao recuperar as Dúvidas, Por favor tente novamente.'}
        </h1>
      </div>
    )
  }

  return (
    <div className="w-screen flex justify-center items-center flex-col m-5 mb-7 overflow-y-hidden overflow-x-hidden">
      <h1 className="text-xl font-bold m-5">Dúvidas mais relevantes:</h1>

      {isLoading ? (
        <div
          className={`animate-spin rounded-full h-10 w-10 border-t-2 border-b-2  ${
            darkMode ? 'border-white' : 'border-gray-900 mb-3'
          }`}
        />
      ) : (
        orderRelevantDoubts(data).map((item) => (
          <div
            key={item.id}
            className={`flex gap-2 p-2 rounded-lg ${
              darkMode ? 'bg-gray-950' : 'bg-gray-300'
            } items-center justify-center w-full h-14 overflow-y-hidden my-1 md:w-[90%]`}
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
            <p className="sm:w-[75%] w-[60%]">
              {(screenWidht as number) < 640
                ? truncateText(item.title, 33)
                : item.title}
            </p>
            <span className="flex gap-1">
              <MessageSquare
                onClick={() => handleNavigate(item.id)}
                className="cursor-pointer"
              />
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
