import type { TeamMember } from '@/features/team/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
        {member.initials}
      </div>
      {member.name && (
        <p className="mt-4 text-lg font-semibold text-gray-900">{member.name}</p>
      )}
      <p className="mt-1 text-sm text-gray-500">{member.role}</p>
    </div>
  )
}
