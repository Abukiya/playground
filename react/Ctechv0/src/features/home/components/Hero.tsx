import { Link } from 'react-router-dom'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { SITE } from '@/config/site'
import { motion } from 'motion/react'

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition :{ duration:0.5} },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 text-brand-yellow sm:py-56 bg-[url('/hero-bg.png')] bg-cover bg-center">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
               transition: {
                 staggerChildren: 0.3,} },
          }}
        >
          <motion.span
            variants={childVariants}
            className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-black"
          >
            {SITE.tagline}
          </motion.span>
          <motion.div variants={childVariants}>
            <Heading as="h1" className="mt-6 text-brand-yellow">
              C-TECH TECHNOLOGIES
            </Heading>
          </motion.div>
          <motion.p
            variants={childVariants}
            className="mt-4 text-lg leading-relaxed text-brand-yellow/70 sm:text-xl"
          >
            {SITE.description}
          </motion.p>
          <motion.div
            variants={childVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
