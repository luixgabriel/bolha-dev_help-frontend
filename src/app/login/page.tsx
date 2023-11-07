'use client'
import React from 'react'
import GithubIcon from '../components/icons/github-icon'
import Link from 'next/link'
import LoginContainer from '../components/containers/login-container'

const Login = () => {
  return (
    <LoginContainer>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src="logo.png"
          alt="Your Company"
        />
        <h2 className=" mt-5 text-center text-2xl leading-9">Entrar com</h2>
      </div>

      <Link
        href={`https://github.com/login/oauth/authorize?client_id=a83ada9c87fb4017a65c`}
        className="border border-black p-2 mt-5 rounded-md flex justify-center"
      >
        <span className="text-md flex gap-2 font-base">
          Github <GithubIcon />
        </span>
      </Link>

      <div className="flex mt-6 items-center">
        <div className="h-[1px] flex-grow bg-black"></div>
        <p className="text-center text-sm font-base leading-5 text-gray-500  mx-4">
          Ou continue com
        </p>
        <div className="h-[1px] flex-grow bg-black"></div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-base leading-6 "
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
              />
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
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black  focus:ring-2 focus:ring-inset"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
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
    </LoginContainer>
  )
}

export default Login
