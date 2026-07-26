import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Heading } from '@/components/Heading'
import { ServicesGrid } from '@/features/services/components/ServicesGrid'
import { getServices } from '@/features/services/api/getServices'

export function ServicesPage() {
  const services = getServices()

  return (
    <>
      <Section background="gray">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Heading>Our Services</Heading>
            <p className="mt-4 text-lg text-brand-black/70">
              Three service lines engineered to help your business grow.
            </p>
          </div>

          <div className="mt-16">
            <ServicesGrid services={services} />
          </div>
        </Container>
      </Section>
    </>
  )
}
