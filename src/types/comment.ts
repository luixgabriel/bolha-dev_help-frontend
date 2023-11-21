export interface IComment {
  id: string
  content: string
  likes: number
  usersLikeThisComment: string[] // Assumindo que esta propriedade é uma lista de IDs de usuários que curtiram o comentário
  createdAt: string // Pode ser mais preciso com um tipo Date se desejado
  userId: string
  answerId: string
}
