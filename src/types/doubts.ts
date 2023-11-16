import { IAnswers, IAnswersInDoubts } from './answers'

export interface IDoubts {
  id: string
  title: string
  category: string
  image: string | null
  description: string
  createdAt: string
  user: {
    name: string
    imageUrl: string | null
  }
  Answers?: IAnswersInDoubts[] | IAnswers[] | number[]
}
