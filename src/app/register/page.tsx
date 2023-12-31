'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterData, registerSchema } from '../../types/register-schema'
import LoginContainer from '../components/containers/login-container'
import { useRegisterDataMutate } from '../../hooks/useRegisterMutate'
import LoadingIcon from '../components/icons/loading-icon'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useDarkMode } from '../../hooks/useDarkMode'
import Footer from '../components/footer'

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  })

  const token = Cookies.get('token')
  const router = useRouter()
  const { darkMode } = useDarkMode()
  const { mutate, isPending } = useRegisterDataMutate()

  const onSubmit = async (data: RegisterData) => {
    mutate(data)
  }

  if (token) {
    router.push('/')
  }

  return (
    <>
      <LoginContainer>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 w-auto"
            src="logo.png"
            alt="Your Company"
          />
          <h2 className=" mt-5 text-center text-2xl  leading-9 ">
            Registre-se
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-base"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register('email')}
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-black  focus:ring-2 focus:ring-inset focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500  mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm leading-6 font-base"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  {...register('name', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-black  focus:ring-2 focus:ring-inset focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500  mt-1">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm leading-6 font-base"
                >
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register('password', {
                    required: 'Campo obrigatório',
                  })}
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-black  focus:ring-2 focus:ring-inset focus:outline-none"
                />
                {errors.password && (
                  <p className="text-red-500  mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md ${
                  darkMode
                    ? 'bg-gray-200 text-black hover:bg-gray-300'
                    : 'bg-blak text-white hover:bg-black'
                } px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {isPending ? <LoadingIcon /> : 'Criar conta'}
              </button>
            </div>
          </form>
        </div>
      </LoginContainer>
      <Footer />
    </>
  )
}

export default Register
