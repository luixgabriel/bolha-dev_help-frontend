'use client'
import GithubIcon from '../components/icons/github-icon'
import Link from 'next/link'
import LoginContainer from '../components/containers/login-container'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginData, loginSchema } from '../../types/login-schema'
import { useRouter } from 'next/navigation'
import { useLoginDataMutate } from '../../hooks/useLoginMutate'
import LoadingIcon from '../components/icons/loading-icon'
import { useDarkMode } from '../../hooks/useDarkMode'
import Footer from '../components/footer'

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  const token = Cookies.get('token')
  const router = useRouter()
  const { darkMode } = useDarkMode()
  const { mutate, isPending } = useLoginDataMutate()

  const onSubmit = async (data: LoginData) => {
    mutate(data)
  }

  if (token) {
    router.push('/')
  }

  return (
    <>
      <LoginContainer>
        <div className="lg:w-[40%]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-12 w-auto"
              src="logo.png"
              alt="Your Company"
            />
            <h2 className=" mt-5 text-center text-2xl leading-9">Entrar com</h2>
          </div>

          <Link
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
            className={`border ${
              darkMode ? 'border-white' : 'border-black'
            } p-2 mt-5 rounded-md flex justify-center`}
          >
            <span className="text-md flex gap-2 font-base">
              Github <GithubIcon />
            </span>
          </Link>

          <div className="flex mt-6 items-center">
            <div
              className={`h-[1px] flex-grow ${
                darkMode ? 'bg-white' : 'bg-blak'
              }`}
            ></div>
            <p className="text-center text-sm font-base leading-5 text-gray-500  mx-4">
              Ou continue com
            </p>
            <div
              className={`h-[1px] flex-grow ${
                darkMode ? 'bg-white' : 'bg-blak'
              }`}
            ></div>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-base leading-6 "
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    {...register('email')}
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
                  />
                  {errors.email && (
                    <p className="text-red-500  mt-1">{errors.email.message}</p>
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
                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
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
                  {isPending ? <LoadingIcon /> : 'Entrar'}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm font-base">
              Novo no bolhadev_help?{' '}
              <Link
                href="/register"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Crie sua conta aqui.
              </Link>
            </p>
          </div>
        </div>
      </LoginContainer>
      <Footer />
    </>
  )
}

export default Login
