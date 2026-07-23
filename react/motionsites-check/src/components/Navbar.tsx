import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = ['Vault', 'Plans', 'Install', 'News', 'Help'];

const easeIn = [0.22, 1, 0.36, 1] as const;
const easeOut = [0.55, 0, 1, 0.45] as const;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sheetVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.45, ease: easeIn },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.35, ease: easeOut },
  },
};

const linkVariants = {
  hidden: { x: 24, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.18 + i * 0.07,
      duration: 0.4,
      ease: easeIn,
    },
  }),
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5"
    >
      {/* Left: Logo */}
      <Logo />

      {/* Center: Desktop nav links */}
      <ul className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--color-text)' }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Desktop CTA buttons */}
      <div className="hidden items-center gap-3 md:flex">
        <a
          href="#"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          Start For Free
        </a>
        <a
          href="#"
          className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:shadow-lg active:scale-95"
          style={{ backgroundColor: 'var(--color-login-bg)', color: 'var(--color-text)' }}
        >
          Sign In
        </a>
      </div>

      {/* Mobile: Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} style={{ color: 'var(--color-text)' }} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(25,40,55,0.35)', backdropFilter: 'blur(4px)' }}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              className="fixed right-0 top-0 z-50 flex h-dvh flex-col"
              style={{
                width: 'min(88vw, 360px)',
                backgroundColor: '#CFC8C5',
                boxShadow: '-12px 0 48px rgba(25,40,55,0.18)',
              }}
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <Logo />
                <motion.button
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(25,40,55,0.1)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} style={{ color: 'var(--color-text)' }} />
                </motion.button>
              </div>

              {/* Divider */}
              <div
                className="mx-6 border-t"
                style={{ borderColor: 'rgba(25,40,55,0.12)' }}
              />

              {/* Nav links */}
              <div className="flex flex-col gap-1 px-4 py-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="rounded-xl px-4 py-3 font-medium transition-colors hover:bg-black/10"
                    style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 px-6 pb-8">
                <a
                  href="#"
                  className="w-full rounded-full py-3.5 text-center font-semibold text-white"
                  style={{
                    fontSize: '0.95rem',
                    backgroundColor: 'var(--color-accent)',
                  }}
                >
                  Start For Free
                </a>
                <a
                  href="#"
                  className="w-full rounded-full py-3.5 text-center font-semibold"
                  style={{
                    fontSize: '0.95rem',
                    backgroundColor: 'var(--color-login-bg)',
                    color: 'var(--color-text)',
                  }}
                >
                  Sign In
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
