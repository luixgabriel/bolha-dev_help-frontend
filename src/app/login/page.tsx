'use client'
import React from 'react'
import GithubIcon from '../components/icons/github-icon'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src="logo.png"
          alt="Your Company"
        />
        <h2 className=" mt-5 text-center text-2xl font-bold leading-9 ">
          Entrar com
        </h2>
      </div>

      <Link
        href={`https://github.com/login/oauth/authorize?client_id=a83ada9c87fb4017a65c`}
        className="border border-black p-2 mt-5 rounded-md flex justify-center"
      >
        <span className="font-black text-md flex gap-2">
          Github <GithubIcon />
        </span>
      </Link>

      <div className="flex mt-6 items-center">
        <div className="h-[1px] flex-grow bg-black"></div>
        <p className="text-center text-md leading-5 text-gray-500 font-bold mx-4">
          Ou continue com
        </p>
        <div className="h-[1px] flex-grow bg-black"></div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm leading-6 font-black"
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
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-black focus:ring-2 focus:ring-inset"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm leading-6 font-black"
              >
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-black focus:ring-2 focus:ring-inset"
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

        <p className="mt-10 text-center text-md font-bold">
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
  )
}

export default Login
