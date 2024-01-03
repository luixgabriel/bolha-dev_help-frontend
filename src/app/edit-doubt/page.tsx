'use client'
import { useForm, Controller } from 'react-hook-form'
import { FileInput } from '../components/drag-drop-input'
import { useState } from 'react'
import categoryList, { ICategory } from '../../data/categorys'
import { DoubtData, doubtSchema } from '../../types/doubtSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import LoadingIcon from '../components/icons/loading-icon'
import { useDoubtsDataById } from '../../hooks/useDoubtsById'
import LoadingScreen from '../components/containers/loading-screen'
import { useEditDoubtMutate } from '../../hooks/useEditDoubtsMutate'
import { useDarkMode } from '../../hooks/useDarkMode'

const EditDoubt = ({ searchParams }: { searchParams: { id: string } }) => {
  const { darkMode } = useDarkMode()
  const { data, isLoading } = useDoubtsDataById(searchParams.id)
  const { mutate, isPending } = useEditDoubtMutate()
  const {
    handleSubmit,
    control,
    register,

    formState: { errors },
  } = useForm<Partial<DoubtData>>({
    resolver: zodResolver(doubtSchema),
  })

  const [image, setImage] = useState<File | null>(null)

  const handleFileChange = (file: File) => {
    setImage(file)
  }

  const onSubmit = (data: Partial<DoubtData>) => {
    const newData = { ...data, image, doubtsId: searchParams.id }
    mutate(newData)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div
      className={`${
        darkMode && 'bg-blak'
      } h-screen w-screen flex justify-center lg:items-center`}
    >
      <div
        className={`overflow-y-hidden lg:w-[70%] ${
          darkMode ? 'bg-blak ' : 'bg-white'
        } rounded p-2`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-600">Título:</label>
            <input
              {...register('title', { value: data.title })}
              type="text"
              className="focus:outline-none block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Categoria:</label>
            <Controller
              render={({ field }) => (
                <select
                  {...field}
                  className="form-select mt-1 block w-full p-2 border rounded-md shadow-sm cursor-pointer"
                >
                  {categoryList.map((item: ICategory) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
              defaultValue={data.category}
              control={control}
              name="category"
            />
          </div>

          <div className="mb-4 ">
            <label className="block text-gray-600">Descrição:</label>
            <textarea
              {...register('description', { value: data.description })}
              rows={6}
              className=" focus:outline-none block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
            />
            <span className="text-red-500 text-sm">
              {errors.description?.message}
            </span>
          </div>
          <div className="my-4">
            <span className="text-sm leading-3 pl-2 text-gray-400">
              A imagem é opcional!
            </span>
            <FileInput onFileChanges={handleFileChange} />
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

export default EditDoubt
