import { Code, TrendingUp, Printer } from 'lucide-react'
import {motion} from 'motion/react'

import type { Service } from '@/features/services/types'

const iconMap = { Code, TrendingUp, Printer } as const

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap]

  const serviceCardVariant ={
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0, transition:{ duration:.5}}
  }

  return (
    <motion.article className="rounded-xl border border-brand-black bg-brand-black p-8 shadow-sm"
    variants={serviceCardVariant}>
      <div className="inline-flex rounded-lg bg-brand-yellow p-3 text-brand-black">
        <Icon size={32} aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-brand-yellow">{service.title}</h3>
      <p className="mt-1 text-sm font-medium text-brand-yellow/80">{service.tagline}</p>
      <p className="mt-3 text-brand-yellow/70">{service.description}</p>

      <ul className="mt-6 space-y-3">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-brand-yellow/70">
            <span className="mt-0.5 flex-shrink-0 text-brand-yellow" aria-hidden="true">▶</span>
            {detail}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
