'use client';

import { teamMembers } from '@/constants/team-members-data';
import { TTeamMember } from '@/types/team-card';
import { useState } from 'react';
import TeamCard from '../cards/team-card';
import SectionHeading from '../shared/section-heading';
import { Marquee } from '../magicui/marquee';
import TeamMemberDetailsModal from '../modals/team-member-details';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TTeamMember | null>(
    null,
  );

  const openModal = (member: TTeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };
  return (
    <div className="relative mx-4 mt-12 overflow-hidden py-10 lg:mt-20">
      <SectionHeading
        title="Meet Our Team"
        description="Our skilled team delivering innovative, data-driven solutions with expertise and collaboration."
      />
      <div className="relative mt-6 flex w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="py-10 [--duration:20s]">
          {teamMembers?.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              index={index}
              openModal={openModal}
            />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>

      {selectedMember && (
        <TeamMemberDetailsModal
          isOpen={!!selectedMember}
          closeModal={closeModal}
          selectedMember={selectedMember}
        />
      )}
    </div>
  );
}
