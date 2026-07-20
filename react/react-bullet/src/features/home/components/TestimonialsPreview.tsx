import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Heading } from '@/components/Heading'
import type { Testimonial } from '@/features/home/types'

const testimonials: Testimonial[] = [
  {
    quote:
      'C-Tech delivered our e-commerce platform on time and within budget. The team is responsive, professional, and highly skilled.',
    name: 'A. M.',
    role: 'Founder',
    company: 'EthioMart',
  },
  {
    quote:
      'Their digital marketing strategy doubled our online leads in three months. Highly recommend for any growing business.',
    name: 'B. T.',
    role: 'Marketing Director',
    company: 'Sheger Tech',
  },
  {
    quote:
      'Premium printing quality with fast turnaround. Our branded materials have never looked better.',
    name: 'S. K.',
    role: 'Operations Manager',
    company: 'Addis Print Co.',
  },
]

export function TestimonialsPreview() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading>What Our Clients Say</Heading>
          <p className="mt-4 text-gray-600">
            Trusted by businesses across Ethiopia.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-gray-200 bg-white p-8"
            >
              <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <span className="block text-sm text-gray-500">
                    {t.role}{t.company ? `, ${t.company}` : ''}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  )
}
