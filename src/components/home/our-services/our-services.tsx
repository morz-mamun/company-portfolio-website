import SectionHeading from '../../shared/section-heading';
import BentoGridCards from './bento-grid-cards';

export default function OurServices() {
  return (
    <section className="mt-10 border-y px-2 py-10 md:mt-20 md:py-12">
      {/* section heading */}
      <SectionHeading
        title="Our Services"
        description="We build smarter systems, powerful websites and scalable automation workflows for modern brands, ecommerce stores and SaaS platforms across the U.S and beyond."
        descriptionClassName="mb-10 lg:!max-w-[800px] xl:!max-w-[800px]"
      />

      {/* our services with bento grid card */}
      <BentoGridCards />
    </section>
  );
}
