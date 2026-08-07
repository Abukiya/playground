export interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

export interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  href: string
}
