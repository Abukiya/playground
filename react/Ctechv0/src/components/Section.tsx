import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: 'white' | 'yellow' | 'dark'
}

const backgrounds = {
  white: 'bg-white',
  yellow: 'bg-brand-yellow',
  dark: 'bg-brand-black text-brand-yellow',
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
