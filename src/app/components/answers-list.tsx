import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ThumbsUp } from 'lucide-react'
import { ptBR } from 'date-fns/locale'
import Cookies from 'js-cookie'
import { dislikeAnswer, likeAnswer } from '../../services/requests'
import { IAnswersInDoubts } from '../../types/answers'
import LoadingIcon from './icons/loading-icon'
import CommentList from './comment-list'
import InputComment from './input-comment'
import { useDarkMode } from '../../hooks/useDarkMode'

const AnswersList = ({ answers }: any) => {
  const userId = Cookies.get('userId')
  const token = Cookies.get('token')
  const { darkMode } = useDarkMode()
  const [likedAnswers, setLikedAnswers] = useState<{ [key: string]: boolean }>(
    {},
  )
  const [loadingButton, setLoadingButton] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const likeMutate = useMutation({
    mutationFn: likeAnswer,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data-by-id'] })
      if (token) {
        setTimeout(() => {
          setLoadingButton(null)
        }, 1800)
      } else {
        setLoadingButton(null)
      }
    },
  })

  const dislikeMutate = useMutation({
    mutationFn: dislikeAnswer,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doubts-data-by-id'] })
      if (token) {
        setTimeout(() => {
          setLoadingButton(null)
        }, 1800)
      } else {
        setLoadingButton(null)
      }
    },
  })

  useEffect(() => {
    const likedAnswersMap: { [key: string]: boolean } = {}
    answers.forEach((item: IAnswersInDoubts) => {
      if (item.usersLikeThisAnswer.includes(userId as string)) {
        likedAnswersMap[item.id] = true
      }
    })
    setLikedAnswers(likedAnswersMap)
  }, [answers, userId])

  return (
    <>
      {(answers?.length as number) > 0 && (
        <div className="w-[95%] mx-auto">
          {answers?.map((item: IAnswersInDoubts) => (
            <div
              key={item.id}
              className={` ${
                darkMode ? 'shadow-sm shadow-white' : 'shadow-md'
              } px-2 rounded-md mx-3 mb-7 mt-3 `}
            >
              <div className="flex px-2 justify-between">
                <div className="mb-3 mt-3">
                  <h1 className="font-bold">{item.user.name}</h1>
                  <span className="text-xs overflow-y-hidden">
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </div>
                <span className="flex gap-2 m-3">
                  {loadingButton === item.id ? (
                    <LoadingIcon />
                  ) : (
                    <>
                      {item.likes}
                      <span className="ml-1">
                        <ThumbsUp
                          size={20}
                          color={likedAnswers[item.id] ? '#5AB9ED' : undefined}
                          onClick={() => {
                            setLoadingButton(item.id)
                            if (likedAnswers[item.id]) {
                              dislikeMutate.mutate(item.id)
                            } else {
                              likeMutate.mutate(item.id)
                            }
                          }}
                          className="cursor-pointer"
                        />
                      </span>
                    </>
                  )}
                </span>
              </div>
              <p className="px-1 my-2 mb-3">{item.description}</p>
              <InputComment answerId={item.id} />
              <div className="flex gap-2 mt-2 mb-3 mx-1">
                <button className="bg-zinc-500 text-sm text-white py-1 px-4 rounded-md">
                  Enviar mensagem
                </button>
              </div>

              {item.Comment && item.Comment.length > 0 && (
                <CommentList comment={item.Comment} />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AnswersList
