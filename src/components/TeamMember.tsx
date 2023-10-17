import { TeamMember } from '@/types'
import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const TeamMember = ({ name, role, imageUrl, socials }: TeamMember) => {
  return (
    <div className="flex mt-4">
        <Image src={imageUrl} alt={`Picture of ${name}`} width={150} height={150} className="rounded-full"/>
        <div className="flex flex-col justify-center">
            <h2 className="px-4 text-2xl">{name}</h2>
            <h2 className="px-4 text-2xl">{role}</h2>
            <p className="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex px-4 py-2">
                <SocialIcon target="_blank" network="discord" url={socials[0].url} style={{height: 45, width: 45}}/>
                <SocialIcon target="_blank" network="github" url={socials[1].url} style={{height: 45, width: 45}}/>
                <SocialIcon target="_blank" network="linkedin" url={socials[2].url} style={{height: 45, width: 45}}/>
            </div>
        </div>
    </div>
  )
}

export default TeamMember