import SectionHeading from '../../shared/section-heading';
import BorderXPattern from '../../shared/border-x-pattern';
import OrbitingCirclesAnimation from './orbiting-circles';
import { WorldMapDemo } from './world-map';
import Analytics from './analytics';
import ChatBotPreview from './chat-bot-preview/chat-bot-preview';

export default function HowWeManageWork() {
  return (
    <section>
      {/* section title */}
      <SectionHeading
        title="How we manage our work?"
        description="We build smarter systems, powerful websites and scalable automation workflows for modern brands, e-commerce stores and SaaS platforms across the U.S and beyond."
        className="mx-auto max-w-[975px] text-center"
      />
      <div className="relative mt-10 overflow-hidden border-y px-4 md:px-6">
        {/* content container */}
        <div className="relative border-x">
          {/* contain */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[2px]">
            <ChatBotPreview />
            <OrbitingCirclesAnimation />
            <Analytics />
            <WorldMapDemo />
          </div>
          {/* border x design */}
          <BorderXPattern className="-left-4 w-4 md:-left-6 md:w-6" />
          <BorderXPattern className="-right-4 w-4 md:-right-6 md:w-6" />
        </div>
      </div>
    </section>
  );
}
