import { motion } from 'motion/react';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { getTeamMembers } from '@/features/team/api/getTeam';
import { TeamGrid } from '@/features/team/components/TeamGrid';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export function TeamPage() {
  const members = getTeamMembers();

  return (
    <Section background="yellow">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div className="mx-auto max-w-2xl text-center mb-16"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          >
            <motion.div variants={variants}>
              <Heading>Our Team</Heading>
            </motion.div>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              variants={variants}
            >
              The people behind C-Tech, working to deliver excellence.
            </motion.p>
          </motion.div>
          <TeamGrid members={members} />
        </motion.div>
      </Container>
    </Section>
  );
}
