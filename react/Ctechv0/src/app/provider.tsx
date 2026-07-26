import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>
}
