import React from 'react'

interface IInputFieldProps {
  id: string
  label: string
  name: string
  type: string
  register: any
  error: any
}

const InputField = ({
  id,
  label,
  name,
  type,
  register,
  error,
}: IInputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm leading-6 font-black">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      {...register('password', {
        required: 'Campo obrigatório',
      })}
      className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-black focus:ring-2 focus:ring-inset"
    />
    {error && <p className="text-red-500">Campo Obrigatorio</p>}
  </div>
)

export default InputField
