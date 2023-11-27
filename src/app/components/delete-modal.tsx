import { AlertCircle } from 'lucide-react'
import { useState } from 'react'
import LoadingIcon from './icons/loading-icon'

interface IDeleteModalProps {
  show: boolean
  onConfirm: () => void
  onCancel: () => void
}

const DeleteModal = ({ show, onConfirm, onCancel }: IDeleteModalProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const handleConfirm = async () => {
    setLoading(true)
    try {
      onConfirm()
    } catch (error) {
      onCancel()
      console.error('Erro ao deletar:', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    show && (
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="fixed inset-0 bg-blak bg-opacity-90"></div>
        <div className="bg-white p-4 rounded-md z-20 w-[90%] flex flex-col items-center justify-center md:w-[30%] md:h-[40%]">
          <AlertCircle size={50} color="#EF4444" className="m-5" />
          <p className="text-gray-800 mb-4">
            Você realmente deseja deletar esta dúvida?
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mr-2 rounded"
              onClick={() => handleConfirm()}
            >
              {loading ? '...' : 'Sim'}
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              onClick={onCancel}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default DeleteModal
