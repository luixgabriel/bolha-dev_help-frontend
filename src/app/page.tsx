import ContainerMain from './components/containers/container-main'
import HelpfulSign from './components/helpful-sign'

export default function Home() {
  return (
    <ContainerMain>
      <div className="flex flex-col items-center mt-14">
        <h1 className="text-2xl font-bold text-center">
          Ajudar alguém em necessidade é um privilégio que todos nós temos.
        </h1>
        <HelpfulSign />
      </div>
    </ContainerMain>
  )
}