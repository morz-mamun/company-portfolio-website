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
        title="From Strategy to Automation: How We Work"
        description="We combine AI automation, cutting-edge software, and strategic workflows to deliver smarter systems and scalable solutions. Whether it’s building websites, e-commerce stores, or SaaS platforms, we streamline processes to help modern brands grow efficiently."
        descriptionClassName="mx-auto !max-w-[850px] text-center"
      />
      <div className="relative mt-10 overflow-hidden border-y px-4 lg:px-6">
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
          <BorderXPattern className="-left-4 w-4 lg:-left-6 lg:w-6" />
          <BorderXPattern className="-right-4 w-4 lg:-right-6 lg:w-6" />
        </div>
      </div>
    </section>
  );
}
