import { cloneElement, isValidElement } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: ReactNode
}

export const buttonVariants = {
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    primary: 'bg-brand-yellow text-brand-black hover:bg-yellow-400 focus-visible:ring-brand-yellow',
    secondary: 'bg-brand-black text-brand-yellow hover:bg-gray-900 focus-visible:ring-brand-yellow',
    outline: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-yellow focus-visible:ring-brand-yellow',
    ghost: 'text-brand-black hover:bg-brand-yellow hover:text-brand-black focus-visible:ring-brand-yellow',
  } as const,
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  } as const,
}

export function Button({
  variant = 'primary',
  size = 'md',
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    buttonVariants.base,
    buttonVariants.variants[variant],
    buttonVariants.sizes[size],
    className,
  )

  if (asChild && isValidElement<{ className?: string }>(children)) {
    return cloneElement(children, {
      className: cn(classes, children.props.className),
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
