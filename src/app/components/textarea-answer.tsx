import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { SendHorizontalIcon } from 'lucide-react'
import { toast } from 'react-toastify'
import { useAnswerMutate } from '../../hooks/useAnswersMutate'

const TextAreaAnswer = ({ doubtsId }: { doubtsId: string }) => {
  const { isAuthenticated } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ description: string }>()
  const { mutate, isPending } = useAnswerMutate()
  const onSubmit: SubmitHandler<{ description: string }> = (data) => {
    if (!isAuthenticated) {
      console.log('oi')
      return toast.error('Você precisa estar logado para enviar uma resposta!')
    } else {
      console.log('ai')
      const description = data.description
      console.log(description)
      const createAnswer = { description, doubtsId }
      console.log(createAnswer)
      mutate(createAnswer)
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
          <textarea
            {...register('description', {
              required: 'Campo obrigatório',
            })}
            placeholder="Responder"
            className="block w-[95%] rounded-md border-0 mt-1 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset"
          />
          {errors.description && (
            <p className="text-red-500  mt-1">{errors.description.message}</p>
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

export default TextAreaAnswer
