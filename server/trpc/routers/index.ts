import { router } from '../trpc'
import { organogramaRouter } from './organograma'

export const appRouter = router({
  organograma: organogramaRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
