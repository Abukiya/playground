import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { CaseStudy } from '@/features/portfolio/types'

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            {study.service}
          </span>
          <span>{study.industry}</span>
        </div>

        <h3 className="mt-3 text-xl font-semibold text-gray-900">{study.title}</h3>

        <p className="mt-1 text-sm font-medium text-blue-600">{study.client}</p>

        <p className="mt-3 text-gray-600">{study.summary}</p>

        <Link
          to={`/portfolio/${study.id}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Read case study <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
