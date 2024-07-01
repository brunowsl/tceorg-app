import type { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'
import { getServerSession } from '#auth'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(_event: H3Event) {
  const session = await getServerSession(_event)
  return {
    session,
    prisma: _event.context.prisma
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
