import { Marquee } from '@/components/magicui/marquee';
import SectionHeading from '@/components/shared/section-heading';
import { TWhyChooseUs } from '@/types/services';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function WhyChooseUs({
  sectionData,
}: {
  sectionData: TWhyChooseUs;
}) {
  const { sectionTitle, marqueeData } = sectionData;
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center justify-center overflow-hidden">
      {/* section heading */}
      <SectionHeading
        title={sectionTitle}
        titleClassName="max-w-[300px] md:max-w-2xl mx-auto"
      />
      {/* marque */}
      <Marquee pauseOnHover className="mt-10 [--duration:20s] md:mt-14">
        {marqueeData?.map((item, index) => (
          <div
            key={index}
            className="flex max-w-[180px] cursor-pointer flex-col items-center justify-center space-y-3 rounded-[32px] border p-3 shadow-[0_2px_4.8px_1px_rgba(0,0,0,0.25)] md:max-w-[300px] md:space-y-5 md:px-6 md:py-6 lg:py-8"
          >
            <div className="w-fit rounded-full bg-[#F6F6F6] p-3 md:p-4">
              <Icon
                icon={item?.icon}
                className="text-brand text-3xl md:text-4xl"
              />
            </div>

            <p className="text-brand/70 dark:text-primary/70 text-center text-xs md:text-base">
              {item?.title}
            </p>
          </div>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r md:w-1/5 lg:w-1/4"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l md:w-1/5 lg:w-1/4"></div>
    </section>
  );
}
