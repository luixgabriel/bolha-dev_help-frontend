import React from 'react'
import GithubIcon from '../components/icons/github-icon'

const page = () => {
  return (
    <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src="logo.png"
          alt="Your Company"
        />
        <h2 className=" mt-5 text-center text-2xl font-bold leading-9 ">
          Registre-se
        </h2>
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
            <label
              htmlFor="name"
              className="block text-sm leading-6 font-black"
            >
              Nome
            </label>
            <div className="mt-2">
              <input
                name="name"
                type="text"
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
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
