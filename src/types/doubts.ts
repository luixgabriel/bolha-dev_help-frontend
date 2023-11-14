import { IAnswers } from './answers'

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
  Answers?: number[] | IAnswers[]
}
