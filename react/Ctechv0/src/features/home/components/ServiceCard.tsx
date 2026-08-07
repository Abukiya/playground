import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { Service } from '../types'

const MotionLink = motion.create(Link);

export default function ServiceCard({ service }: { service: Service }) {

  const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}
  const iconVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

  const Icon = service.icon
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center w-full"
    >
      <motion.div
        className="inline-flex shrink-0 rounded-lg bg-brand-yellow p-3 text-brand-black"
        variants={iconVariants}
      >
        <Icon size={56} aria-hidden="true" />
      </motion.div>
      <MotionLink
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        to={service.href}
        aria-label={service.title}
        className="group rounded-xl bg-brand-black p-8 shadow-sm transition-shadow hover:shadow-md flex-1"
      >
        <h3 className="mt-4 text-xl font-semibold text-brand-yellow">
          {service.title}
        </h3>
        <p className="mt-2 text-brand-yellow/70 line-clamp-2">{service.description}</p>
      </MotionLink>
    </div>
  )
}