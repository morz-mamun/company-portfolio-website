import SectionHeading from '../../shared/section-heading';
import BentoGridCards from './bento-grid-cards';

export default function OurServices() {
  return (
    <section className="mt-10 px-2 py-10 md:mt-20 md:py-12">
      {/* section heading */}
      <SectionHeading
        title="Our Services"
        description="Trust Global Communications (TGCX) delivers Automation, AI Multi-Agent, Digital Marketing, E-Commerce, Software, and Smart Security Solutions that help businesses scale with smarter strategies and future-ready tools."
        descriptionClassName="mb-10 lg:!max-w-[1050px] xl:!max-w-[1050px]"
      />

      {/* our services with bento grid card */}
      <BentoGridCards />
    </section>
  );
}
