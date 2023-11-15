'use client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { CornerDownRightIcon, MessagesSquare, ThumbsUp } from 'lucide-react'
import defaultImg from '../../assets/imgs/null.png'
import doubts from '../../data/doubts'
import { useDoubtsDataById } from '../../hooks/useDoubtsById'
import answers from '../../data/answers'
import { IAnswers } from '../../types/answers'
import DoubtContent from '../components/doubt-content'
import LoadingScreen from '../components/containers/loading-screen'

const Doubts = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data, isLoading } = useDoubtsDataById(searchParams.id)
  // const exampleDoubt = doubts[3]
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
      <textarea
        placeholder="Responder"
        className="block w-[95%] self-center rounded-md border-0 mt-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
      />
      <div className="p-2 mt-1 mx-1 flex gap-2">
        <MessagesSquare />
        <span>{data.Answers?.length} Respostas</span>
      </div>
      {(data.Answers?.length as number) > 0 && (
        <div className="w-[95%] mx-auto">
          {answers.map((item: IAnswers, index) => (
            <div
              key={index}
              className="shadow-md px-2 rounded-md mx-3 mb-7 mt-3 "
            >
              <div className="flex px-2 justify-between">
                <div className="mb-3">
                  <h1 className="font-bold">{item.user.name}</h1>
                  <span className="text-xs overflow-y-hidden">
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                  <div className="h-[1px] bg-black w-full" />
                </div>
                <span className="flex gap-2 m-3">
                  {item.likes}
                  <ThumbsUp size={20} />
                </span>
              </div>
              <p className="px-1 my-2 mb-3">
                HTML, que significa HyperText Markup Language (Linguagem de
                Marcação de Hipertexto, em português), é a linguagem padrão
                utilizada para criar páginas web. Foi desenvolvida para ser
                interpretada por navegadores web, permitindo a estruturação de
                conteúdo como texto, imagens, links, formulários e outros
                elementos.
              </p>
              <input
                type="text"
                placeholder="Responder"
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
              />
              <div className="flex gap-2 my-3 mx-1">
                <button className="bg-black text-sm text-white py-1 px-4 rounded-md">
                  Curtir
                </button>
                <button className="bg-gray-500 text-sm text-white py-1 px-4 rounded-md">
                  Enviar mensagem
                </button>
              </div>
              <div className="flex flex-col py-2">
                <div className="flex mx-1 gap-2">
                  {' '}
                  <CornerDownRightIcon />
                  <div>
                    <h1 className="text-sm font-semibold">{item.user.name}</h1>
                    <span className="text-xs overflow-y-hidden">
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                </div>
                <span className="ml-7 mt-1 w-[90%] mb-4 border border-gray-500 rounded-lg p-2">
                  é a linguagem padrão utilizada para criar páginas web. Foi
                  desenvolvida para ser interpretada por navegadores web,
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Doubts
