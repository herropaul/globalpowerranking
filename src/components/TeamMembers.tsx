import { TeamMemberProps } from '@/types'
import React from 'react'
import TeamMember from './TeamMember'

const TeamMembers = ({ teamInfo }: TeamMemberProps) => {
  return (
    <div className="flex flex-wrap">
        {teamInfo.map(member => (
            <TeamMember 
                key={member.name} name={member.name} role={member.role} description={member.description}
                imageUrl={member.imageUrl} socials={member.socials}
            />
        ))}
    </div>
  )
}

export default TeamMembers