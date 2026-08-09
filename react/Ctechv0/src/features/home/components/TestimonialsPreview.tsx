import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import type { Testimonial } from '@/features/home/types';
import { easeInOut, motion } from 'motion/react';
import { view } from 'motion/react-client';

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
];

export function TestimonialsPreview() {
  const itemVaraints = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transation: { duration: 0.5 } },
  };
  return (
    <Section background="white">
      <Container>
        <motion.div
        initial ="hidden"
        whileInView ="visible"
        viewport={{once:true}}
        variants={{
          hidden:{},
          visible:{transition:{staggerChildren:.2}}
        }}>
          <motion.div className="mx-auto max-w-2xl text-center"
          variants={{
            hidden:{opacity:0, y:20},
            visible:{opacity:1,y:0,transition:{duration:0.5, ease:easeInOut}}
          }}>
            <Heading>What Our Clients Say</Heading>
            <p className="mt-4 text-gray-600">
              Trusted by businesses across Ethiopia.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            variants={{ 
              hidden: {},
              visible:{transition:{staggerChildren:.2}}
          }}
          >
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.name}
                className="rounded-xl border border-gray-200 bg-brand-black p-8"
                variants={itemVaraints}
              >
                <p className="text-brand-yellow/80">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="font-semibold text-brand-yellow">
                      {t.name}
                    </span>
                    <span className="block text-sm text-brand-yellow/60">
                      {t.role}
                      {t.company ? `, ${t.company}` : ''}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
