import { Link } from 'react-router-dom'
import { Code, TrendingUp, Printer } from 'lucide-react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

const services = [
  {
    icon: Code,
    title: 'Tech Innovation Hub',
    description:
      'Custom software and web development tailored to your business needs. From MVPs to enterprise platforms.',
    href: '/services',
  },
  {
    icon: TrendingUp,
    title: 'Digital Promotion & Advertising',
    description:
      'Data-driven marketing campaigns that grow your brand presence and deliver measurable results.',
    href: '/services',
  },
  {
    icon: Printer,
    title: 'Premium Printing',
    description:
      'High-quality printing services for business cards, banners, brochures, and more.',
    href: '/services',
  },
]

export function ServicesPreview() {
  return (
    <Section background="gray">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading>What We Do</Heading>
          <p className="mt-4 text-gray-600">
            Three service lines, one mission — helping your business thrive.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                to={service.href}
                className="group rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
