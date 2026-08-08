import { ServiceCard } from '@/features/services/components/ServiceCard'
import type { Service } from '@/features/services/types'
import {motion} from 'motion/react'

interface ServicesGridProps {
  services: Service[]
}



export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <motion.div className="grid gap-8 lg:grid-cols-3"
    initial="hidden"
    animate="visible"
    variants={{
      visible:{
        transition:{
          staggerChildren:.4
        }
      }
    }}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  )
}
