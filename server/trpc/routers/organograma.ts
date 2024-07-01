import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'

export const organogramaRouter = router({
  createOrganograma: protectedProcedure.input(z.object({
    nome: z.string(),
    descricao: z.string(),
  })).mutation(async ({ input, ctx }) => {
    const { nome, descricao } = input
    const organograma = await ctx.prisma.organograma.create({
      data: {
        nome,
        descricao
      }
    })
    return organograma
  }),
  getAllOrganogramas: protectedProcedure.query(async ({ ctx }) => {
    const organogramas = await ctx.prisma.organograma.findMany()
    return organogramas
  }),
})
