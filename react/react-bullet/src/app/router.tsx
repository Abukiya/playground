import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/features/home/components/HomePage'

const ServicesPage = () => <div>Services</div>
const PortfolioPage = () => <div>Portfolio</div>
const PortfolioDetailPage = () => <div>Case Study</div>
const TeamPage = () => <div>Team</div>
const ContactPage = () => <div>Contact</div>

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
