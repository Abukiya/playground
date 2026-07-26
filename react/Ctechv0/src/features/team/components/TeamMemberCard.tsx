import type { TeamMember } from '@/features/team/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-brand-yellow/20 bg-brand-black p-8 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow text-2xl font-bold text-brand-black">
        {member.initials}
      </div>
      {member.name && (
        <p className="mt-4 text-lg font-semibold text-brand-yellow">{member.name}</p>
      )}
      <p className="mt-1 text-sm text-brand-yellow/60">{member.role}</p>
    </div>
  )
}
