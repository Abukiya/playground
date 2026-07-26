import type { Service } from '@/features/services/types'

const services: Service[] = [
  {
    id: 'tech-innovation-hub',
    title: 'Tech Innovation Hub',
    tagline: 'Custom software & web development',
    description:
      'We build scalable digital products that solve real problems. From concept to deployment, our team delivers modern web and mobile applications tailored to your business needs.',
    details: [
      'Custom web application development (React, Node.js, Python)',
      'Mobile app development (iOS & Android)',
      'E-commerce platforms and payment integration',
      'API development and third-party integrations',
      'Cloud infrastructure and DevOps',
      'UI/UX design and prototyping',
    ],
    icon: 'Code',
  },
  {
    id: 'digital-promotion',
    title: 'Digital Promotion & Advertising',
    tagline: 'Data-driven marketing that delivers',
    description:
      'Grow your brand presence with targeted digital marketing campaigns. We combine strategy, creativity, and analytics to drive measurable results for your business.',
    details: [
      'Social media management and content creation',
      'Search engine optimization (SEO)',
      'Pay-per-click advertising (Google & Meta Ads)',
      'Email marketing campaigns',
      'Brand strategy and identity design',
      'Analytics and performance reporting',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'premium-printing',
    title: 'Premium Printing',
    tagline: 'High-quality print materials',
    description:
      'Professional printing services for all your business needs. We use high-quality materials and modern printing techniques to ensure your brand looks its best on every medium.',
    details: [
      'Business cards and letterheads',
      'Brochures, flyers, and catalogs',
      'Banners, signage, and large format printing',
      'Packaging and label design',
      'Event materials and invitations',
      'Custom merchandise and promotional items',
    ],
    icon: 'Printer',
  },
]

export function getServices(): Service[] {
  return services
}

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
