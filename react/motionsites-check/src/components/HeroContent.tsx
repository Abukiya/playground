import { motion } from 'framer-motion';
import { ArrowRightCircle, Zap, LockKeyhole, Fingerprint } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease,
    },
  }),
};

const iconStyle: React.CSSProperties = {
  color: '#192837',
  display: 'inline',
  verticalAlign: 'middle',
  position: 'relative',
  top: -2,
  margin: '0 4px',
};

export default function HeroContent() {
  return (
    <div
      className="relative z-10 mx-auto max-w-[1280px]"
      style={{
        paddingTop: 'clamp(40px, 8vw, 72px)',
        paddingBottom: 48,
      }}
    >
      <div className="mx-auto max-w-[660px] text-center">
        {/* Heading */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.65rem, 5vw, 3rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--color-text)',
          }}
        >
          <span style={{ whiteSpace: 'nowrap' }}>
            Lock
            <Zap size={24} style={iconStyle} />
            Down Your
            <LockKeyhole size={24} style={iconStyle} />
            Passwords
          </span>
          <br />
          <span>
            with Ironclad Security
            <Fingerprint size={24} style={{ ...iconStyle, marginLeft: 6, marginRight: 0 }} />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            color: 'var(--color-text)',
            opacity: 0.8,
            maxWidth: 560,
            lineHeight: 1.65,
          }}
        >
          Zero stress, total control. Unbreakable storage, one-tap access, and pro-grade tools for
          your non-stop world.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 inline-flex"
        >
          <a
            href="#"
            className="inline-flex items-center justify-between gap-8 text-white transition-all hover:brightness-110 active:scale-96"
            style={{
              borderRadius: 50,
              backgroundColor: 'var(--color-accent)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              padding: '17px 24px',
              minWidth: 210,
              boxShadow: '0 4px 24px rgba(115,66,226,0.28)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span className="font-semibold">Get It Free</span>
            <ArrowRightCircle size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
