'use client'
import { useForm, Controller } from 'react-hook-form'
import { FileInput } from '../components/drag-drop-input'
import { useEffect, useState } from 'react'
import categoryList, { ICategory } from '../../data/categorys'
import { DoubtData, doubtSchema } from '../../types/doubtSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDoubtMutate } from '../../hooks/useDoubtsMutate'
import LoadingIcon from '../components/icons/loading-icon'

const Page = () => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<DoubtData>({
    resolver: zodResolver(doubtSchema),
  })
  useEffect(() => {
    setValue('category', categoryList[0].name)
  }, [])
  const { mutate, isPending } = useDoubtMutate()
  const [image, setImage] = useState<File | null>(null)

  const handleFileChange = (file: File) => {
    setImage(file)
  }

  const onSubmit = (data: DoubtData) => {
    const newData = { ...data, image }
    mutate(newData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto  bg-white p-8 shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-600">Título:</label>
        <input
          {...register('title', { required: 'Campo obrigatório' })}
          type="text"
          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
        />
        <span className="text-red-500 text-sm">{errors.title?.message}</span>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600">Categoria:</label>
        <Controller
          render={({ field }) => (
            <select
              {...field}
              defaultValue={categoryList[0].name}
              className="form-select mt-1 block w-full p-2 border rounded-md shadow-sm"
            >
              {categoryList.map((item: ICategory) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
          control={control}
          name="category"
        />
      </div>

      <div className="mb-4 ">
        <label className="block text-gray-600">Descrição:</label>
        <textarea
          {...register('description', { required: 'Campo obrigatório' })}
          rows={6}
          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
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
        className="bg-blak text-white px-4 flex items-center justify-center py-2 rounded hover:bg-black w-full transition-all"
      >
        {isPending ? <LoadingIcon /> : 'Enviar'}
      </button>
    </form>
  )
}

export default Page
