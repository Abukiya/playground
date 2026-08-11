import { motion } from 'motion/react'

import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import type { TeamMember } from '@/features/team/types'

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </motion.div>
  )
}
