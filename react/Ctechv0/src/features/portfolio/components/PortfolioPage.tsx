import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { PortfolioGrid } from '@/features/portfolio/components/PortfolioGrid';
import { getPortfolioItems } from '@/features/portfolio/api/getPortfolio';
import { motion } from 'motion/react';

export function PortfolioPage() {
  const items = getPortfolioItems();

  const varaints = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <Section background="white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div className="mx-auto max-w-2xl text-center mb-16"
          variants={{
            hidden:{},
            visible:{transition:{staggerChildren:.15}}
          }}>
            <motion.div variants={varaints}>
              <Heading>Our Work</Heading>
            </motion.div>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={varaints}
            >
              Real projects, real results. See how we&apos;ve helped businesses
              across Ethiopia.
            </motion.p>
          </motion.div>
          <PortfolioGrid items={items} />
        </motion.div>
      </Container>
    </Section>
  );
}
