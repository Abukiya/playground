import { Routes, Route } from 'react-router-dom'

import { ErrorPage } from '@/components/ErrorPage'
import { Layout } from '@/components/Layout'
import { ContactPage } from '@/features/contact/components/ContactPage'
import { HomePage } from '@/features/home/components/HomePage'
import { CaseStudyDetail } from '@/features/portfolio/components/CaseStudyDetail'
import { PortfolioPage } from '@/features/portfolio/components/PortfolioPage'
import { ServicesPage } from '@/features/services/components/ServicesPage'
import { TeamPage } from '@/features/team/components/TeamPage'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<CaseStudyDetail />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
