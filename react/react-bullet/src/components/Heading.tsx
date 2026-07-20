import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  children: ReactNode
}

const styles = {
  h1: 'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
  h2: 'text-3xl font-bold tracking-tight sm:text-4xl',
  h3: 'text-2xl font-semibold sm:text-3xl',
  h4: 'text-xl font-semibold',
}

export function Heading({ as: Tag = 'h2', className, children }: HeadingProps) {
  return <Tag className={cn(styles[Tag], className)}>{children}</Tag>
}
