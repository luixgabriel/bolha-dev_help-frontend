export interface IDoubts {
  id: string
  title: string
  category: string
  image?: string
  description: string
  createdAt: string
  user: {
    name: string
    imageUrl: string
  }
  Answers?: string[]
}
