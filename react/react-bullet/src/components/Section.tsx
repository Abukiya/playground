import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: 'white' | 'gray' | 'dark'
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
}

export function Section({
  id,
  className,
  children,
  background = 'white',
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', backgrounds[background], className)}>
      {children}
    </section>
  )
}
