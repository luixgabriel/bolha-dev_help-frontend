'use client'
import Image from 'next/image'
import defaultImg from '../../assets/imgs/null.png'
import { IDoubts } from '../../types/doubts'
import orderRelevantDoubts from '../../utils/orderRelevantDoubts'
import { ArrowRight, MessageSquare, Pencil, X } from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'
import LoadingScreen from '../components/containers/loading-screen'
import { useDoubtsDataByUser } from '../../hooks/useDoubtsByUser'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import DeleteModal from '../components/delete-modal'
import Cookies from 'js-cookie'
import Footer from '../components/footer'
import { useDarkMode } from '../../hooks/useDarkMode'

const UserDoubts = ({ searchParams }: { searchParams: { id: string } }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { darkMode } = useDarkMode()
  const { data, isLoading } = useDoubtsDataByUser(searchParams.id)
  const screenWidht = useWindowSize()
  const router = useRouter()
  const token = Cookies.get('token')

  const handleNavigate = (id: string) => {
    router.push(`/doubts?id=${id}`)
  }

  const handleNavigateToEdit = (id: string) => {
    router.push(`/edit-doubt?id=${id}`)
  }

  const handleDelete = () => {
    setShowModal(true)
  }

  const confirmDelete = async () => {
    setShowModal(false)
    window.location.reload()
  }

  const cancelDelete = () => {
    setShowModal(false)
  }

  if (!token) {
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen">
        <LoadingScreen />
      </div>
    )
  }
  return (
    <>
      <div className={`${darkMode && 'bg-blak'} w-screen h-screen`}>
        {data?.length === 0 ? (
          <div className="p-5 flex items-center justify-center">
            <h1
              className={`text-2xl overflow-y-hidden ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Você ainda não enviou nenhuma dúvida.
            </h1>
          </div>
        ) : (
          <div className="flex flex-col items-center my-5">
            {data.map((item: IDoubts) => (
              <div
                key={item.id}
                className={`flex gap-2 px-4 rounded-lg ${
                  darkMode
                    ? 'bg-gray-950 text-white'
                    : 'bg-gray-300  text-black'
                } items-center justify-center w-[90%] my-1 h-14 md:w-[90%] overflow-y-hidden`}
              >
                <Image
                  src={
                    item.user.imageUrl
                      ? (item.user.imageUrl as string)
                      : defaultImg
                  }
                  width={40}
                  height={40}
                  alt="user-icon"
                  className="rounded-full cursor-pointer"
                />
                <p className="sm:w-[75%] w-[60%]">
                  {(screenWidht as number) < 700
                    ? truncateText(item.title, 30)
                    : item.title}
                </p>
                <div className="flex gap-2 items-center">
                  <DeleteModal
                    doubtId={item.id}
                    show={showModal}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                  />
                  <span className="flex gap-1">
                    <MessageSquare
                      onClick={() => handleNavigate(item.id)}
                      className="cursor-pointer"
                    />
                    {item.Answers ? item.Answers.length : item.Answers}
                  </span>
                  {(screenWidht as number) < 700 ? (
                    <>
                      {' '}
                      <Pencil
                        onClick={() => handleNavigateToEdit(item.id)}
                        className="cursor-pointer"
                      />
                      <X
                        onClick={() => handleDelete()}
                        className="cursor-pointer"
                      />
                    </>
                  ) : (
                    <>
                      <ArrowRight
                        onClick={() => handleNavigate(item.id)}
                        className="cursor-pointer"
                      />
                      <button
                        onClick={() => handleNavigateToEdit(item.id)}
                        className={`${
                          darkMode
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-green-300 hover:bg-green-400'
                        } p-2 rounded-md shadow-md flex justify-center items-center gap-1`}
                      >
                        Editar
                        <Pencil size={17} />
                      </button>
                      <button
                        onClick={() => handleDelete()}
                        className={`${
                          darkMode
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-red-300 hover:bg-red-400'
                        } p-2 rounded-md shadow-md flex justify-between items-center gap-1`}
                      >
                        Deletar
                        <X size={17} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default UserDoubts
