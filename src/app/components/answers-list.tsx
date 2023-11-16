import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CornerDownRightIcon, SendHorizontalIcon, ThumbsUp } from 'lucide-react'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { likeAnswer } from '../../services/requests'

const AnswersList = ({ answers }: any) => {
  const queryClient = useQueryClient()
  const likeMutate = useMutation({
    mutationFn: likeAnswer,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data-by-id'] })
    },
  })
  return (
    <>
      {(answers?.length as number) > 0 && (
        <div className="w-[95%] mx-auto">
          {answers?.map((item: any) => (
            <div
              key={item.id}
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
                </div>
                <span className="flex gap-2 m-3">
                  {item.likes}
                  <ThumbsUp size={20} />
                </span>
              </div>
              <p className="px-1 my-2 mb-3">{item.description}</p>
              <input
                type="text"
                placeholder="Responder"
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
              />
              <span className="flex items-center gap-2 my-2  cursor-pointer">
                Enviar <SendHorizontalIcon size={18} />
              </span>
              <div className="flex gap-2 mt-4 mb-3 mx-1">
                <button
                  onClick={() => likeMutate.mutate(item.id)}
                  disabled={likeMutate.isPending}
                  className="bg-black text-sm text-white py-1 px-4 rounded-md hover:bg-gray-800 transition-all"
                >
                  Curtir
                </button>
                <button className="bg-zinc-500 text-sm text-white py-1 px-4 rounded-md">
                  Enviar mensagem
                </button>
              </div>
              {item.Comment && item.Comment.length > 0 && (
                <div className="flex flex-col py-2">
                  <div className="flex mx-1 gap-2">
                    {' '}
                    <CornerDownRightIcon />
                    <div>
                      <h1 className="text-sm font-semibold">
                        {item.user.name}
                      </h1>
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
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AnswersList
