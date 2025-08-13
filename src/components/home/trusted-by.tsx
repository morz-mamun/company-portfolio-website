import { trustedByTeamData } from '@/constants/trusted-by-team-data';
import { Marquee } from '../magicui/marquee';
import SectionHeading from '../shared/section-heading';

export default function TrustedBy() {
  return (
    <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center overflow-hidden">
      <SectionHeading title="Trusted by teams" />
      <Marquee pauseOnHover className="[--duration:20s]">
        {trustedByTeamData?.map((review, index) => (
          <div key={index} className="flex items-center gap-2 p-3">
            <p className="text-base text-[#A1A1A1] md:text-xl">
              {review.username}
            </p>
          </div>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
