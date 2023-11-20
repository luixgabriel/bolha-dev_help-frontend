import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { SendHorizontalIcon } from 'lucide-react'
import { toast } from 'react-toastify'
import { useCommentMutate } from '../../hooks/useCommentMutate'

const InputComment = ({ answerId }: { answerId: string }) => {
  const { isAuthenticated } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ content: string }>()
  const { mutate, isPending } = useCommentMutate()
  const onSubmit: SubmitHandler<{ content: string }> = (data) => {
    if (!isAuthenticated) {
      return toast.error('Você precisa estar autenticado para isso.')
    } else {
      const content = data.content
      const createComment = { content, answerId }
      mutate(createComment)
    }
  }
  return (
    <div className="block w-[95%] self-center">
      {isPending ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 self-center border-gray-900 m-5"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('content', {
              required: 'Campo obrigatório',
            })}
            placeholder="Responder"
            className="block w-[95%] rounded-md border-0 mt-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset"
          />
          {errors.content && (
            <p className="text-red-500  mt-1">{errors.content.message}</p>
          )}
          <span
            className="flex items-center gap-2 my-2 cursor-pointer"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Enviar <SendHorizontalIcon size={18} />
          </span>
        </form>
      )}
    </div>
  )
}

export default InputComment
