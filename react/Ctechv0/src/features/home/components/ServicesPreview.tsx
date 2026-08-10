import { Link } from 'react-router-dom';
import { Code, TrendingUp, Printer } from 'lucide-react';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { motion } from 'motion/react';
import ServiceCard from './ServiceCard';
import type { Service } from '../types';

const services: Service[] = [
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
];

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition:{duration:1} },
};

export function ServicesPreview() {
  return (
    <Section background="yellow">
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
          variants={headingVariants}
          >
          <Heading>What We Do</Heading>
          </motion.div>
          <motion.p
            className="mt-4 text-brand-black/70"
            variants={headingVariants}
          >
            Three service lines, one mission — helping your business thrive.
          </motion.p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 justify-items-center max-w-3xl mx-auto">
          {services.map((service) => {
            return <ServiceCard key={service.title} service={service} />;
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
