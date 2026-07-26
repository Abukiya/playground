import type { CaseStudy } from '@/features/portfolio/types'

const caseStudies: CaseStudy[] = [
  {
    id: 'ethiomart-ecommerce',
    title: 'E-Commerce Platform for Local Retailers',
    client: 'EthioMart',
    industry: 'Retail & E-Commerce',
    service: 'Tech Innovation Hub',
    summary:
      'Built a full-featured e-commerce platform connecting local Ethiopian retailers with online customers.',
    challenge:
      'EthioMart needed a scalable online marketplace that could handle multiple vendors, secure payments, and mobile-first traffic — all while operating in a market with unreliable internet infrastructure.',
    solution:
      'We built a progressive web app with offline capabilities, mobile money integration, and a vendor dashboard. The platform uses React for the frontend and Node.js for the API layer, with a lightweight caching strategy for low-bandwidth environments.',
    results: [
      '200+ vendors onboarded in the first 6 months',
      '15,000+ monthly active users',
      '40% reduction in cart abandonment with offline-first design',
      '99.5% uptime since launch',
    ],
    link: 'https://ethiomart.example.com',
  },
  {
    id: 'sheger-digital-campaign',
    title: 'Integrated Digital Marketing Campaign',
    client: 'Sheger Tech',
    industry: 'Technology',
    service: 'Digital Promotion & Advertising',
    summary:
      'A data-driven multi-channel campaign that doubled lead generation for a growing tech startup.',
    challenge:
      'Sheger Tech had a strong product but low brand awareness outside of Addis Ababa. They needed a cost-effective way to reach decision-makers across Ethiopia and East Africa.',
    solution:
      'We executed a 90-day campaign combining targeted social media ads, SEO-optimized content marketing, and email nurturing sequences. Campaign performance was monitored daily with real-time adjustments.',
    results: [
      '200% increase in qualified leads',
      '45% reduction in customer acquisition cost',
      '5x return on ad spend',
      '10,000+ new newsletter subscribers',
    ],
    link: 'https://shegertech.example.com',
  },
  {
    id: 'addis-print-rebrand',
    title: 'Complete Brand Print Package',
    client: 'Addis Print Co.',
    industry: 'Printing & Manufacturing',
    service: 'Premium Printing',
    summary:
      'Delivered a full suite of branded print materials for a company rebranding initiative.',
    challenge:
      'Addis Print Co. was undergoing a complete brand refresh and needed all physical materials redesigned and reprinted — from business cards to vehicle wraps — within a tight 3-week deadline.',
    solution:
      'We managed the entire print production pipeline: design refinement, material selection, proofing, and bulk printing. Used premium paper stocks and UV coating for a professional finish.',
    results: [
      'All materials delivered 2 days ahead of schedule',
      'Zero errors in final print run',
      'Client reported 30% increase in brand recognition',
      'Ongoing monthly print partnership established',
    ],
  },
  {
    id: 'habesha-hotel-booking',
    title: 'Hotel Booking & Management System',
    client: 'Habesha Hotels Group',
    industry: 'Hospitality',
    service: 'Tech Innovation Hub',
    summary:
      'A custom hotel management system with online booking, inventory tracking, and staff management.',
    challenge:
      'Habesha Hotels managed reservations across 3 locations using spreadsheets and phone calls. They needed a centralized system to manage bookings, room inventory, and staff schedules.',
    solution:
      'We developed a web-based PMS (Property Management System) with real-time availability sync, online booking widget, and an admin dashboard. Integrated with popular payment gateways and SMS notifications.',
    results: [
      '60% reduction in no-show rates with automated SMS reminders',
      '75% decrease in manual admin work',
      '3x increase in direct online bookings',
      'System handles 500+ reservations per week',
    ],
  },
]

export function getPortfolioItems(): CaseStudy[] {
  return caseStudies
}

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id)
}
