'use client'
import { useForm, Controller } from 'react-hook-form'
import { FileInput } from '../components/drag-drop-input'
import { useState } from 'react'
import categoryList, { ICategory } from '../../data/categorys'

const Page = () => {
  const { handleSubmit, control, register } = useForm()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File) => {
    // Faça o que for necessário com o arquivo, por exemplo, enviar para o backend
    console.log('chamei')
    console.log('Arquivo selecionado:', file)
    setSelectedFile(file)
  }

  const onSubmit = (data: any) => {
    // Envie os dados para o backend aqui (substitua com sua lógica real)
    console.log(selectedFile)
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto mt-8 bg-white p-8 shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-600">Título:</label>
        <input
          {...register('titulo', { required: 'Campo obrigatório' })}
          type="text"
          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
        />
        {/* <span className="text-red-500 text-sm">{errors.titulo?.message}</span> */}
      </div>

      <div className="mb-4">
        <label className="block text-gray-600">Categoria:</label>
        <Controller
          render={({ field }) => (
            <select
              {...field}
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
          name="categoria"
          rules={{ required: 'Campo obrigatório' }}
        />
        {/* <span className="text-red-500 text-sm">{errors.categoria?.message}</span> */}
      </div>

      <div className="mb-4 ">
        <label className="block text-gray-600">Descrição:</label>
        <textarea
          {...register('descricao', { required: 'Campo obrigatório' })}
          rows={6}
          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
        />
        {/* <span className="text-red-500 text-sm">{errors.descricao?.message}</span> */}
      </div>
      <div className="my-4">
        <span className="text-sm leading-3 pl-2">A imagem é opcional!</span>
        <FileInput onFileChanges={handleFileChange} />
      </div>

      <button
        type="submit"
        className="bg-blak text-white px-4 py-2 rounded hover:bg-black w-full transition-all"
      >
        Enviar
      </button>
    </form>
  )
}

export default Page
