import { z } from 'zod'

export const registerSchema = z.object({
  email: z.string().nonempty('Campo obrigatório!'),
  name: z.string().nonempty('Campo obrigatório!'),
  password: z.string().nonempty('Campo obrigatório!'),
})

export type RegisterData = z.infer<typeof registerSchema>
