import { CaseStudyCard } from '@/features/portfolio/components/CaseStudyCard'
import type { CaseStudy } from '@/features/portfolio/types'

interface PortfolioGridProps {
  items: CaseStudy[]
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {items.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  )
}
