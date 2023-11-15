import { CircuitBoard } from 'lucide-react'

interface DoubtContentProps {
  category: string
  title: string
  description: string
  image: string
}
const DoubtContent = (data: DoubtContentProps) => (
  <div className="mt-2 p-3 w-screen">
    <span className="text-sm text-gray-400 pl-1 flex items-center gap-1">
      <CircuitBoard /> {data.category}
    </span>
    <div className=" mt-2">
      <h1 className="font-bold text-xl pl-1">{data.title}</h1>
      <p className="pl-1 mt-2 mb-5">{data.description}</p>
      {data.image && (
        <img
          className="mx-auto w-[95%] rounded-md shadow-sm"
          src={data.image}
          alt="image-answer"
        />
      )}
    </div>
  </div>
)

export default DoubtContent
