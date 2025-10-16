import SectionHeading from './section-heading';
import { EmailSubscription } from '../form/form-fields/subscribe-email';

export default function NewsLetterSection() {
  return (
    <div className="dark:bg-card relative mt-10 flex w-full items-center justify-center bg-[#F2F2F2] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] md:mt-28 md:py-12">
      <div className="z-10 flex w-full flex-col items-center justify-center py-8">
        <SectionHeading
          title="Join our weekly Newsletter"
          description="Stay up to date with the latest news, announcements and newsletter."
          descriptionClassName="mb-5 text-xs md:mb-10 md:text-xs lg:text-base"
        />

        <EmailSubscription />
      </div>
      {/* transparent gradient */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black"></div>
    </div>
  );
}
