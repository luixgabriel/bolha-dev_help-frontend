import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CornerDownRightIcon, ThumbsUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { dislikeComment, likeComment } from '../../services/requests'
import LoadingIcon from './icons/loading-icon'

const CommentList = ({ comment }: any) => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  const [loadingButton, setLoadingButton] = useState<string | null>(null)
  const [likedComments, setLikedComments] = useState<{
    [key: string]: boolean
  }>({})
  const queryClient = useQueryClient()
  const likeMutate = useMutation({
    mutationFn: likeComment,
    retry: 2,
    onSuccess: (data, itemId) => {
      console.log(itemId)
      console.log(data)
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
    mutationFn: dislikeComment,
    retry: 2,
    onSuccess: (data, itemId) => {
      console.log(itemId)
      console.log(data)
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
    const likedCommentMap: { [key: string]: boolean } = {}
    comment.forEach((item: any) => {
      if (item.usersLikeThisComment.includes(userId as string)) {
        likedCommentMap[item.id] = true
      }
    })
    setLikedComments(likedCommentMap)
  }, [comment, userId])

  return (
    <>
      {comment?.map((item: any) => (
        <div key={item.id} className="flex flex-col py-2">
          <div className="flex justify-between">
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
            <span className="ml-1 flex items-center gap-2 mr-5">
              {loadingButton === item.id ? (
                <LoadingIcon />
              ) : (
                <>
                  {item.likes}{' '}
                  <ThumbsUp
                    className="cursor-pointer"
                    color={likedComments[item.id] ? '#5AB9ED' : undefined}
                    size={18}
                    onClick={() => {
                      setLoadingButton(item.id)
                      if (likedComments[item.id]) {
                        dislikeMutate.mutate(item.id)
                      } else {
                        likeMutate.mutate(item.id)
                      }
                    }}
                  />
                </>
              )}
            </span>
          </div>

          <span className="ml-7 mt-1 w-[90%] mb-4 border border-gray-500 rounded-lg p-2">
            {item.content}
          </span>
        </div>
      ))}
    </>
  )
}

export default CommentList
