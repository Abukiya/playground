import { Link } from 'react-router-dom'
import { SITE, NAV_LINKS } from '@/config/site'
import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="border-t border-brand-yellow/20 bg-brand-black">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-bold text-brand-yellow">
              C-TECH
              <span className="block text-[10px] font-semibold tracking-[0.2em] text-brand-yellow/60">
                TECHNOLOGIES
              </span>
            </h3>
            <p className="mt-2 text-sm text-brand-yellow/60">{SITE.description}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-yellow/60 transition-colors hover:text-brand-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-brand-yellow/60">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-brand-yellow/60">
              <li>Tech Innovation Hub</li>
              <li>Digital Promotion & Advertising</li>
              <li>Premium Printing</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-yellow/20 pt-8 text-center text-sm text-brand-yellow/50">
          &copy; {new Date().getFullYear()} C-TECH TECHNOLOGIES. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
