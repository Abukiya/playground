import {  motion } from 'motion/react';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { ContactForm } from '@/features/contact/components/ContactForm';

const slidingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export function ContactPage() {
  return (
    <Section background="white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div variants={slidingVariants}>
              <Heading>Get in Touch</Heading>
            </motion.div>
            <motion.p
              className="mt-4 text-lg text-brand-black/70"
              variants={slidingVariants}
            >
              Have a project in mind? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>

          <motion.div className="mt-16 flex justify-center">
            <motion.div
              className="w-full md:w-3xl"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.h2
                className="font-display text-2xl font-bold text-brand-black mb-6"
                variants={slidingVariants}
              >
                Send us a message
              </motion.h2>
              <motion.p
                className="mt-2 text-brand-black/70"
                variants={slidingVariants}
              >
                General inquiries, questions, or just want to say hello.
              </motion.p>
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
