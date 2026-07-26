import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Heading } from '@/components/Heading'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { DemoRequestForm } from '@/features/contact/components/DemoRequestForm'

export function ContactPage() {
  return (
      <Section background="gray">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Heading>Get in Touch</Heading>
            <p className="mt-4 text-lg text-brand-black/70">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black">Send us a message</h2>
              <p className="mt-2 text-brand-black/70">
                General inquiries, questions, or just want to say hello.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black">Request a demo</h2>
              <p className="mt-2 text-brand-black/70">
                See our products and services in action with a personalized demo.
              </p>
              <div className="mt-6">
                <DemoRequestForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
  )
}
