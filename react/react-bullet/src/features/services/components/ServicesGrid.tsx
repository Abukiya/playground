import { ServiceCard } from '@/features/services/components/ServiceCard'
import type { Service } from '@/features/services/types'

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
