import type { LabelHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn('mb-1 block text-sm font-medium text-gray-700', className)}
      {...props}
    >
      {children}
    </label>
  )
}
