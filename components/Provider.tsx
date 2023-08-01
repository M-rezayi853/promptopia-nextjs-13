'use client'

import { FC, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface Props {
  children: ReactNode
  session?: Session
}

const Provider: FC<Props> = ({ children, session }): JSX.Element => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Provider
