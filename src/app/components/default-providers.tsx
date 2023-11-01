'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { AuthProvider } from '../context/auth-context'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
}
