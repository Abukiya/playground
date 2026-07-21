import { Code, TrendingUp, Printer } from 'lucide-react'
import type { Service } from '@/features/services/types'

const iconMap = { Code, TrendingUp, Printer } as const

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap]

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
        <Icon size={32} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
      <p className="mt-1 text-sm font-medium text-blue-600">{service.tagline}</p>
      <p className="mt-3 text-gray-600">{service.description}</p>

      <ul className="mt-6 space-y-3">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  )
}
