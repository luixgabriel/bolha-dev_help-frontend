import { useDarkMode } from '../../../hooks/useDarkMode'

const LoadingScreen = () => {
  const { darkMode } = useDarkMode()
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 ${
        darkMode ? 'bg-blak' : 'bg-white'
      }`}
    >
      <div
        className={`animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 ${
          darkMode ? 'border-white' : 'border-gray-900 mb-3'
        } `}
      />
    </div>
  )
}

export default LoadingScreen
