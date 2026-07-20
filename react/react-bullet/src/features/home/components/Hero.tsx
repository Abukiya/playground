import { Link } from 'react-router-dom'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { SITE } from '@/config/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 text-white sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h1" className="text-white">
            {SITE.tagline}
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            {SITE.description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
