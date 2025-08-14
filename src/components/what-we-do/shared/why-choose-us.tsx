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
      <SectionHeading title={sectionTitle} titleClassName="max-w-lg mx-auto" />
      {/* marque */}
      <Marquee pauseOnHover className="mt-14 [--duration:20s]">
        {marqueeData?.map((item, index) => (
          <div
            key={index}
            className="flex max-w-[300px] cursor-pointer flex-col items-center justify-center space-y-5 rounded-[32px] border px-6 py-10 shadow-[0_2px_4.8px_1px_rgba(0,0,0,0.25)]"
          >
            <div className="w-fit rounded-full bg-[#F6F6F6] p-4">
              <Icon icon={item?.icon} className="text-brand text-4xl" />
            </div>

            <p className="text-brand/70 dark:text-primary/70 text-center">
              {item?.title}
            </p>
          </div>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </section>
  );
}
