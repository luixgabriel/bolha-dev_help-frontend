'use client'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import categoryList, { ICategory } from '../../data/categorys'
import { DoubtData, doubtSchema } from '../../types/doubtSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import LoadingIcon from '../components/icons/loading-icon'
import LoadingScreen from '../components/containers/loading-screen'
import { useEditDoubtMutate } from '../../hooks/useEditDoubtsMutate'
import { useAnswersDataById } from '../../hooks/useAnswersById'
import { useEditAnswerMutate } from '../../hooks/useEditAnswerMutate'

const EditAnswer = ({ searchParams }: { searchParams: { id: string } }) => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-8 shadow-md rounded"
    >
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
        className="bg-blak text-white px-4 flex items-center justify-center py-2 rounded hover:bg-black w-full transition-all"
      >
        {isPending ? <LoadingIcon /> : 'Enviar'}
      </button>
    </form>
  )
}

export default EditAnswer
