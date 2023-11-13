import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number | null>(null)

  useEffect(() => {
    const atualizarwindowSize = () => {
      setWindowSize(window.innerWidth)
    }

    // Adiciona um ouvinte de redimensionamento para detectar mudanças na largura da tela
    window.addEventListener('resize', atualizarwindowSize)

    // Chama a função inicialmente para definir a largura da tela ao carregar a página
    atualizarwindowSize()

    // Remove o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', atualizarwindowSize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
