import type { TextareaHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function Textarea({ className, label, id, ...props }: TextareaProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30',
          className,
        )}
        rows={4}
        {...props}
      />
    </div>
  )
}
