export const buttonVariants = {
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    primary: 'bg-brand-yellow text-brand-black hover:bg-yellow-400 focus-visible:ring-brand-yellow',
    secondary: 'bg-gray-700 text-brand-yellow hover:bg-gray-800 focus-visible:ring-brand-yellow',
    outline: 'border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black  focus-visible:ring-brand-yellow',
    ghost: 'text-brand-black hover:bg-brand-yellow hover:text-brand-black focus-visible:ring-brand-yellow',
  } as const,
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  } as const,
}
