import { TeamMemberProps } from "@/types";
import React from "react";
import TeamMember from "./TeamMember";

const TeamMembers = ({ teamInfo }: TeamMemberProps) => {
  return (
    <div className="flex flex-wrap">
      {teamInfo.map((member) => (
        <div key={member.name} className="w-1/3 p-2">
          <TeamMember
            name={member.name}
            role={member.role}
            description={member.description}
            imageUrl={member.imageUrl}
            socials={member.socials}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
