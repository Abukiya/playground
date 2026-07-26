export function cn(...args: (string | number | boolean | null | undefined)[]): string {
  return args.filter(Boolean).join(' ')
}
