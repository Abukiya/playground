import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Heading } from '@/components/Heading'
import { TeamGrid } from '@/features/team/components/TeamGrid'
import { getTeamMembers } from '@/features/team/api/getTeam'

export function TeamPage() {
  const members = getTeamMembers()

  return (
    <Section background="gray">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading>Our Team</Heading>
          <p className="mt-4 text-lg text-gray-600">
            The people behind C-Tech, working to deliver excellence.
          </p>
        </div>

        <div className="mt-16">
          <TeamGrid members={members} />
        </div>
      </Container>
    </Section>
  )
}
