import { AlertCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { deleteDoubt } from '../../services/requests'
import { toast } from 'react-toastify'

interface IDeleteModalProps {
  show: boolean
  onCancel: () => void
  onConfirm: () => void
  doubtId: string
}

const DeleteModal = ({
  show,
  onCancel,
  doubtId,
  onConfirm,
}: IDeleteModalProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const deleteDoubtMutate = useMutation({
    mutationFn: deleteDoubt,
    retry: 2,
    onSuccess: (data) => {
      console.log(data)
      setLoading(false)
      setIsSuccess(true)
    },
    onError: (error) => {
      setLoading(false)
      console.log(error)
      toast.error('Erro ao deletar a dúvida, Tente novamente.')
    },
  })
  const handleConfirm = async () => {
    setLoading(true)
    deleteDoubtMutate.mutate(doubtId)
  }
  return (
    show && (
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="fixed inset-0 bg-blak bg-opacity-50"></div>
        <div className="bg-white p-4 rounded-md z-20 w-[90%] flex flex-col items-center justify-center md:w-[30%] md:h-[40%]">
          {loading ? (
            <div className="flex justify-cente h-44">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 self-center border-gray-900 m-5"></div>
            </div>
          ) : (
            <>
              {' '}
              {isSuccess ? (
                <>
                  <CheckCircle size={50} color="#16A34A" className="m-5" />
                  <p className="text-gray-800 mb-4">
                    Dúvida deletada com sucesso! :)
                  </p>
                  <div>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 rounded cursor-pointer"
                      onClick={onConfirm}
                    >
                      Continuar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle size={50} color="#EF4444" className="m-5" />
                  <p className="text-gray-800 mb-4">
                    Você realmente deseja deletar esta dúvida?
                  </p>
                  <div>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mr-2 rounded"
                      onClick={handleConfirm}
                    >
                      Sim
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                      onClick={onCancel}
                    >
                      Não
                    </button>
                  </div>
                </>
              )}
            </>
          )}
          <div className="flex flex-col items-center justify-center"></div>
        </div>
      </div>
    )
  )
}

export default DeleteModal
