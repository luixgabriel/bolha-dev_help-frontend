'use client'
import Image from 'next/image'
import { useDoubtsBySearch } from '../../hooks/useDoubtsBySearch'
import { IDoubts } from '../../types/doubts'
import defaultImg from '../../assets/imgs/null.png'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useRouter } from 'next/navigation'
import { useDarkMode } from '../../hooks/useDarkMode'
import LoadingScreen from '../components/containers/loading-screen'

const Search = ({ searchParams }: { searchParams: { filter: string } }) => {
  const { data, isLoading } = useDoubtsBySearch(searchParams.filter)
  const { darkMode } = useDarkMode()
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="w-screen h-screen">
        <LoadingScreen />
      </div>
    )
  }

  return (
    <div className="h-screen w-screen flex ">
      <div
        className={`w-full p-4 ${
          darkMode ? 'bg-blak text-white' : 'bg-white'
        } shadow-md`}
      >
        <h1 className="text-2xl font-bold mb-4 overflow-y-hidden">
          Resultados Encontrados
        </h1>

        {!isLoading && data && data.length === 0 && (
          <p>Nenhum resultado encontrado.</p>
        )}

        {!isLoading &&
          data &&
          data.map((item: IDoubts) => (
            <div
              key={item.id}
              className={`mb-4 p-4 border rounded-md cursor-pointer w-[95%] ${
                darkMode ? 'hover:bg-gray-950' : 'hover:bg-gray-100'
              }`}
              onClick={() => router.push(`doubts?id=${item.id}`)}
            >
              <div className="flex items-center mb-2">
                <Image
                  src={item.user.imageUrl || defaultImg}
                  width={40}
                  height={40}
                  alt="user-icon"
                  className="rounded-full cursor-pointer"
                />
                <div className="flex flex-col ml-2">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p
                    className={`${
                      darkMode ? 'text-gray-100' : 'text-gray-500'
                    } text-sm`}
                  >
                    {' '}
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </p>
                </div>
              </div>
              <p
                className={`${
                  darkMode ? 'text-gray-100' : 'text-gray-700'
                } text-sm`}
              >
                {item.description}
              </p>
              <div className="flex items-center mt-2">
                <span className="text-gray-500 text-sm">
                  Autor: {item.user.name}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Search
