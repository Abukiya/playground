import { Hero } from '@/features/home/components/Hero'
import { ServicesPreview } from '@/features/home/components/ServicesPreview'
import { TestimonialsPreview } from '@/features/home/components/TestimonialsPreview'

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TestimonialsPreview />
    </>
  )
}
