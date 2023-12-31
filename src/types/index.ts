export interface TeamMemberProps {
    teamInfo: TeamMember[]
}

export interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
    description: string;
    socials: Socials[]
}

export interface Socials {
    title: string;
    url: string;
}