import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('Campo obrigatório!'),
  password: z.string().nonempty('Campo obrigatório!'),
})

export type LoginData = z.infer<typeof loginSchema>
