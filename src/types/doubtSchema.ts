import { z } from 'zod'

export const doubtSchema = z.object({
  title: z.string().nonempty('Campo obrigatório!'),
  category: z.string().nonempty('Campo obrigatório!'),
  description: z.string().nonempty('Campo obrigatório!'),
})

export type DoubtData = z.infer<typeof doubtSchema>
