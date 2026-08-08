import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ErrorPage } from '@/components/ErrorPage'
import { HomePage } from '@/features/home/components/HomePage'
import { ServicesPage } from '@/features/services/components/ServicesPage'
import { PortfolioPage } from '@/features/portfolio/components/PortfolioPage'
import { CaseStudyDetail } from '@/features/portfolio/components/CaseStudyDetail'
import { TeamPage } from '@/features/team/components/TeamPage'
import { ContactPage } from '@/features/contact/components/ContactPage'

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
