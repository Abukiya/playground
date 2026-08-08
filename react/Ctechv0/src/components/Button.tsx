import { cloneElement, isValidElement } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { buttonVariants } from './button-variants'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: ReactNode
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
