import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CornerDownRightIcon } from 'lucide-react'
import React from 'react'

const CommentList = ({ comment }: any) => {
  return (
    <>
      {comment?.map((item: any) => (
        <div key={item.id} className="flex flex-col py-2">
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
            {item.content}
          </span>
        </div>
      ))}
    </>
  )
}

export default CommentList
