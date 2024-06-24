import { z } from "zod"

export const postSchema = z.object({
    title: z.string().min(1, {
        message: "O título é obrigatório",
    }).max(4, {
        message: "O título deve ter no máximo 4 caracteres",
    }),
    content: z.string().min(1, {
        message: "O conteúdo é obrigatório",
    }),

})

export type TPost = z.infer<typeof postSchema>