'use client'
import Image from 'next/image'
import defaultImg from '../../assets/imgs/null.png'
import { ArrowRight, ThumbsUp, Pencil, X, MessageSquare } from 'lucide-react'
import useWindowSize from '../../hooks/useWindowSize'
import truncateText from '../../utils/truncateText'
import LoadingScreen from '../components/containers/loading-screen'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useAnswersDataByUser } from '../../hooks/useAnswersByUser'
import { IUserAnswers } from '../../types/answers'
import DeleteModalAnswers from '../components/delete-modal-answers'

const UserAnswers = ({ searchParams }: { searchParams: { id: string } }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { data, isLoading } = useAnswersDataByUser(searchParams.id)
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
    return <LoadingScreen />
  }
  return (
    <div className="bg-red w-screen mt-7 flex flex-col items-center">
      {data.map((item: IUserAnswers) => (
        <div
          key={item.id}
          className="flex gap-2 p-2 rounded-lg bg-gray-300 items-center justify-center w-[90%] my-1"
        >
          <Image
            src={
              item.user.imageUrl ? (item.user.imageUrl as string) : defaultImg
            }
            width={40}
            height={40}
            alt="user-icon"
            className="rounded-full cursor-pointer"
          />
          <p className="w-[60%]">
            {(screenWidht as number) < 700
              ? truncateText(item.description, 35)
              : item.description}
          </p>
          <div className="flex gap-2 items-center">
            <DeleteModalAnswers
              answerId={item.id}
              show={showModal}
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
            />
            <span className="flex gap-1">
              <ThumbsUp />
              {item.likes}
            </span>
            <span className="flex gap-1">
              <MessageSquare
                onClick={() => handleNavigate(item.doubts.id)}
                className="cursor-pointer"
              />
              {item.Comment?.length}
            </span>
            {(screenWidht as number) < 700 ? (
              <>
                {' '}
                <Pencil
                  onClick={() => handleNavigateToEdit(item.id)}
                  className="cursor-pointer"
                />
                <X onClick={() => handleDelete()} className="cursor-pointer" />
              </>
            ) : (
              <>
                <ArrowRight
                  onClick={() => handleNavigate(item.doubts.id)}
                  className="cursor-pointer"
                />
                <button
                  onClick={() => handleNavigateToEdit(item.id)}
                  className="bg-green-300 p-2 rounded-md shadow-md flex justify-center items-center gap-1 hover:bg-green-400"
                >
                  Editar
                  <Pencil size={17} />
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="bg-red-300 p-2 rounded-md shadow-md flex justify-between items-center gap-1 hover:bg-red-400"
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
  )
}

export default UserAnswers
