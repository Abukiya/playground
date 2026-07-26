import type { TeamMember } from '@/features/team/types'

const team: TeamMember[] = [
  { id: '1', initials: 'AT', role: 'Founder & Lead Developer' },
  { id: '2', initials: 'BM', role: 'Digital Marketing Lead' },
  { id: '3', initials: 'SK', role: 'Print Operations Manager' },
  { id: '4', initials: 'HT', role: 'UI/UX Designer' },
  { id: '5', initials: 'DM', role: 'Full Stack Developer' },
  { id: '6', initials: 'TT', role: 'Sales & Client Relations' },
]

export function getTeamMembers(): TeamMember[] {
  return team
}
