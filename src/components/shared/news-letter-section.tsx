import SectionHeading from './section-heading';
import { EmailSubscription } from '../form/form-fields/subscribe-email';

export default function NewsLetterSection() {
  return (
    <div className="bg-[#F2F2F2] py-8 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] md:py-12 dark:bg-[#0D0D0D]">
      <SectionHeading
        title="Join our weekly Newsletter"
        description="Stay up to date with the latest news, announcements and newsletter."
        descriptionClassName="mb-5 text-xs md:mb-10 md:text-xs lg:text-base"
      />

      <EmailSubscription />
    </div>
  );
}
