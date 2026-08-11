import { motion } from 'motion/react'

import { CaseStudyCard } from '@/features/portfolio/components/CaseStudyCard'
import type { CaseStudy } from '@/features/portfolio/types'

interface PortfolioGridProps {
  items: CaseStudy[]
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {items.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </motion.div>
  )
}
