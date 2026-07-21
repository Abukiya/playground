import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Heading } from '@/components/Heading'
import { PortfolioGrid } from '@/features/portfolio/components/PortfolioGrid'
import { getPortfolioItems } from '@/features/portfolio/api/getPortfolio'

export function PortfolioPage() {
  const items = getPortfolioItems()

  return (
    <Section background="gray">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading>Our Work</Heading>
          <p className="mt-4 text-lg text-gray-600">
            Real projects, real results. See how we&apos;ve helped businesses across Ethiopia.
          </p>
        </div>

        <div className="mt-16">
          <PortfolioGrid items={items} />
        </div>
      </Container>
    </Section>
  )
}
