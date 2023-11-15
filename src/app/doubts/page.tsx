'use client'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  CircuitBoard,
  CornerDownRight,
  CornerLeftDown,
  MessagesSquare,
  ThumbsUp,
} from 'lucide-react'
import testImg from '../../assets/imgs/carbon.png'
import doubts from '../../data/doubts'
import { useDoubtsDataById } from '../../hooks/useDoubtsById'
import answers from '../../data/answers'
import { IAnswers } from '../../types/answers'

const Doubts = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useDoubtsDataById(searchParams.id)
  const exampleDoubt = doubts[3]
  const date = new Date(exampleDoubt.createdAt)
  const formatDate = formatDistanceToNow(date, {
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
        <span>{formatDate}</span>
      </div>
      <div className="mt-2 p-2 w-screen">
        <span className="text-sm text-gray-400 pl-1 flex items-center gap-1">
          <CircuitBoard /> {exampleDoubt.category}
        </span>
        <div className=" mt-2">
          <h1 className="font-bold text-xl pl-1">{exampleDoubt.title}</h1>
          <p className="w-screen pl-1 mt-2 mb-5">{exampleDoubt.description}</p>
          <img
            className="mx-auto w-[95%] rounded-md shadow-sm"
            src="carbon.png"
            alt="Your Company"
          />
        </div>
      </div>
      <textarea
        placeholder="Responder"
        className="block w-[95%] self-center rounded-md border-0 mt-3 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
      />
      <div className="p-2 mt-3 mx-1 flex gap-2">
        <MessagesSquare />
        <span>50 Respostas</span>
      </div>
      <div className="w-[95%] mx-auto">
        {answers.map((item: IAnswers, index) => (
          <div key={index} className="shadow-md rounded-md m-3">
            <div className="flex px-2 justify-between">
              <div className="mb-3">
                <h1>{item.user.name}</h1>
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
            <div className="flex justify-center gap-5 my-3">
              <span>Curtir</span>
              <span>Comentar</span>
              <span>Enviar mensagem</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doubts
