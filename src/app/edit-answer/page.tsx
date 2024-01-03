'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import LoadingIcon from '../components/icons/loading-icon'
import LoadingScreen from '../components/containers/loading-screen'
import { useAnswersDataById } from '../../hooks/useAnswersById'
import { useEditAnswerMutate } from '../../hooks/useEditAnswerMutate'
import { useDarkMode } from '../../hooks/useDarkMode'

const EditAnswer = ({ searchParams }: { searchParams: { id: string } }) => {
  const { darkMode } = useDarkMode()
  const { data, isLoading } = useAnswersDataById(searchParams.id)
  const { mutate, isPending } = useEditAnswerMutate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ description?: string }>()

  const onSubmit: SubmitHandler<{ description?: string }> = (data) => {
    const newData = { ...data, answerId: searchParams.id }
    mutate(newData)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div
      className={`${
        darkMode && 'bg-blak'
      } h-screen w-screen flex justify-center `}
    >
      <div
        className={`overflow-y-hidden w-[80%] ${
          darkMode ? 'bg-blak ' : 'bg-white'
        } rounded p-2`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 ">
            <label className="block text-gray-600 p-2">Descrição:</label>
            <textarea
              {...register('description', { value: data.description })}
              rows={6}
              className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
            />
            <span className="text-red-500 text-sm">
              {errors.description?.message}
            </span>
          </div>

          <button
            type="submit"
            className={`flex w-full justify-center rounded-md ${
              darkMode
                ? 'bg-gray-200 text-black hover:bg-gray-300'
                : 'bg-blak text-white hover:bg-black'
            } px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {isPending ? <LoadingIcon /> : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditAnswer
