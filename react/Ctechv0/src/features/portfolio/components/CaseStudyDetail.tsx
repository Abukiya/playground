import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, useParams, Navigate } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Section } from '@/components/Section'
import { getCaseStudy } from '@/features/portfolio/api/getPortfolio'

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>()
  const study = id ? getCaseStudy(id) : undefined

  if (!study) return <Navigate to="/portfolio" replace />

  return (
    <Section background="white">
      <Container>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-black"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to portfolio
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="rounded-full bg-brand-yellow px-2.5 py-0.5 text-xs font-medium text-brand-black">
              {study.service}
            </span>
            <span>{study.industry}</span>
          </div>

          <Heading as="h1" className="mt-4">
            {study.title}
          </Heading>

          <p className="mt-2 text-lg font-medium text-brand-black">{study.client}</p>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">{study.summary}</p>

          {study.link && (
            <a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-black hover:text-brand-yellow"
            >
              Visit website <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">The Challenge</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{study.challenge}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Our Solution</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{study.solution}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Results</h2>
              <ul className="mt-3 space-y-3">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-0.5 flex-shrink-0 text-brand-yellow" aria-hidden="true">▶</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild>
              <Link to="/contact">Start a similar project</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
