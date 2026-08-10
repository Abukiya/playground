import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { ServicesGrid } from '@/features/services/components/ServicesGrid';
import { getServices } from '@/features/services/api/getServices';
import { motion } from 'motion/react';

export function ServicesPage() {
  const services = getServices();

  return (
    <>
      <Section background="yellow">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren:.4} },
            }}
          >
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"

              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition :{duration:.5} },
              }}
            >
              <Heading>Our Services</Heading>
              <p className="mt-4 text-lg text-brand-black/70">
                Three service lines engineered to help your business grow.
              </p>
            </motion.div>
            <ServicesGrid services={services} />
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
