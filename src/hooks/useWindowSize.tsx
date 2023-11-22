import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number | null>(null)

  useEffect(() => {
    const atualizarwindowSize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', atualizarwindowSize)

    atualizarwindowSize()

    return () => {
      window.removeEventListener('resize', atualizarwindowSize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
