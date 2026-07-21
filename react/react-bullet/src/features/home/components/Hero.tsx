import { Link } from 'react-router-dom'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { SITE } from '@/config/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-24 text-brand-yellow sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-black">
            {SITE.tagline}
          </span>
          <Heading as="h1" className="mt-6 text-brand-yellow">
            C-TECH TECHNOLOGIES
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-brand-yellow/70 sm:text-xl">
            {SITE.description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
