import { useState } from 'react';
import { Card } from '../ui/card';
import { TTeamMember } from '@/types/team-card';

export default function TeamCard({
  member,
  index,
  openModal,
}: {
  member: TTeamMember;
  index: number;
  openModal: (member: TTeamMember) => void;
}) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const isHovered = hoveredMember === member.id;

  return (
    <div
      className="animate-fade-in-up relative max-w-3xs transform transition-all duration-500 ease-out md:max-w-xs"
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both',
      }}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      {/* Hover Glow Background - shows only on hovered card */}
      <div
        className={`absolute -inset-1 z-0 rounded-[1rem] bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 blur-sm transition-all duration-300 ease-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Card */}
      <Card
        className={`bg-background border-border/50 relative z-10 cursor-pointer overflow-hidden p-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${
          isHovered ? 'ring-primary/20 ring-2' : ''
        }`}
        onClick={() => openModal(member)}
      >
        {/* Image Container */}
        <div className="relative pt-4 md:pt-6">
          <div className="relative mx-auto h-28 w-28 md:h-40 md:w-40">
            <img
              src={member.image || '/placeholder.svg'}
              alt={member.name}
              className="border-primary/20 h-full w-full rounded-full border-4 object-cover transition-all duration-300"
            />

            {/* Hover Overlay */}
            <div
              className={`from-primary/80 to-accent/80 absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br transition-all duration-300 ${
                isHovered ? 'opacity-90' : 'opacity-0'
              }`}
            >
              <div className="p-4 text-center text-white">
                <div className="text-sm font-medium">Learn More</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 text-center md:px-8 md:pb-8">
          <h3 className="text-foreground mb-2 font-serif text-base font-bold md:text-2xl">
            {member.name}
          </h3>
          <p className="text-primary mb-4 text-xs font-medium md:text-base">
            {member.title}
          </p>

          {/* Bio - Shows on hover */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="bg-accent absolute top-4 right-4 h-2 w-2 rounded-full opacity-60"></div>
        <div className="bg-primary absolute bottom-4 left-4 h-1 w-1 rounded-full opacity-40"></div>
      </Card>
    </div>
  );
}
