const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 mb-3"></div>
    </div>
  )
}

export default LoadingScreen
