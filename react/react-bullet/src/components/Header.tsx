import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/config/site'
import { cn } from '@/utils/cn'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-yellow/20 bg-brand-black">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex flex-col leading-none" aria-label={`${SITE.name} home`}>
          <span className="flex items-center gap-1.">
            <img
              className=" h-8 w-8 rounded-full border  object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
              src="/favicon-96x96.png"
              alt=""
              aria-hidden="true"
            />
            <span className="mb-1 playfair text-2xl font-extrabold tracking-tight text-brand-yellow">
              -TECH
            </span>
          </span>
          <span className="pl-[.65rem] text-[11px] font-semibold tracking-[0.2em] text-brand-yellow/70">
            <span className="sr-only">C-Tech</span>
            TECHNOLOGIES
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium tracking-wide transition-colors',
                  isActive
                    ? 'text-brand-yellow'
                    : 'text-brand-yellow/70 hover:text-brand-yellow',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="text-brand-yellow md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 top-full z-50 border-t border-brand-yellow/20 bg-brand-black/80 px-4 pb-4 pt-2 shadow-xl backdrop-blur-lg md:hidden" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                  isActive
                    ? 'bg-brand-yellow text-brand-black'
                    : 'text-brand-yellow/70 hover:bg-brand-yellow/10 hover:text-brand-yellow',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
