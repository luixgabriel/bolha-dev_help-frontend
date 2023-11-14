export interface IAnswers {
  id: string
  description: string
  likes: number
  createdAt: string
  user: {
    id: string
    name: string
    email: string
  }
  doubts: {
    id: string
    description: string
    createdAt: string
    userId: string
  }
  Comment?: string[]
}
