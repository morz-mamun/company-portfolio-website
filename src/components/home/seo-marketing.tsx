import { Icon } from '@iconify/react';
import SectionHeadingGradient from '../shared/sectionHeadingGradient';
import { ChevronRight } from 'lucide-react';
const SeoAndMarketingData = [
  {
    icon: 'lucide:search',
    serviceName: 'Search Engine Optimization (SEO)',
    description:
      'Increase visibility and rankings with our comprehensive SEO strategies and on page optimization.',
  },
  {
    icon: 'pajamas:media',
    serviceName: 'Social Strategy & Content Marketing',
    description:
      'Build brand awareness and engagement through targeted content and social media campaigns.',
  },
  {
    icon: 'icon-park-outline:google-ads',
    serviceName: 'Google Ads Management',
    description:
      'Maximize ROI with targeted ad campaigns and careful budget management.',
  },
  {
    icon: 'pixel:analytics-solid',
    serviceName: 'Analytics & Conversion Tracking',
    description:
      'Leverage data analytics to monitor performance and optimize your digital campaigns.',
  },
];
export default function SeoAndMarketing() {
  return (
    <section>
      <SectionHeadingGradient
        title="Web & Software Development"
        description="We create high performing, secure and scalable digital solutions tailored to your business needs."
      />
      {/* seo and marketing content */}

      <div className="mx-auto max-w-[910px]">
        <div className="mx-auto mb-[49px] max-w-[762px] text-center">
          <h1 className="mb-[12px] text-[50px] leading-[55px] font-bold text-[#100F0F]">
            Boost Your Online Presence
          </h1>
          <p className="mx-auto max-w-[680px] text-2xl leading-[40px]">
            Elevate your brands line presence through strategic SEO & Digital
            Marketing services to the top measure.
          </p>
        </div>

        <div className="flex flex-col gap-y-[22px]">
          {SeoAndMarketingData?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between bg-[#EBEBEB] p-5"
              >
                <div>
                  {/* icon */}
                  <div className="flex items-center gap-x-3">
                    <Icon
                      icon={item.icon}
                      width={38}
                      height={38}
                      color="#787878"
                    />
                    <h3 className="text-[30px] leading-[76px] font-bold">
                      {item?.serviceName}
                    </h3>
                  </div>
                  <p className="pl-12 text-[18px] leading-[28px]">
                    {item?.description}
                  </p>
                </div>
                {/* arrow icon */}
                <button className="cursor-pointer">
                  <ChevronRight size={40} color="#787878" strokeWidth={3} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
