import { Icon } from '@iconify/react';
import SectionHeadingGradient from '../shared/sectionHeadingGradient';
import { ChevronRight } from 'lucide-react';

const developmentCapabilities = [
  {
    icon: 'mdi:laptop',
    serviceName: 'Responsive & Web Design',
    description:
      'Automate workflows for campaigns, emails and social media engagements.',
  },
  {
    icon: 'grommet-icons:system',
    serviceName: 'Scalable Backend Systems',
    description: 'Highly secure and efficient backend architecture.',
  },
  {
    icon: 'material-symbols:mobile-cast-rounded',
    serviceName: 'Mobile App Development',
    description: 'Crafting engaging apps for IOS and Android.',
  },
  {
    icon: 'mdi:security-lock-outline',
    serviceName: 'Cloud Deployment & Security ',
    description: 'Safe and efficient cloud integration for your applications.',
  },
];
export default function Development() {
  return (
    <section>
      <SectionHeadingGradient
        title="Web & Software Development"
        description="We create high performing, secure and scalable digital solutions tailored to your business needs."
      />

      {/* Development content */}
      <div className="mx-auto mb-[109px] flex max-w-[972px] items-center justify-between gap-x-[55px]">
        {/* image */}
        <div className="h-[307px] w-[340px] overflow-hidden">
          <img
            src="/development.png"
            alt="development image"
            className="h-full w-full object-cover"
          />
        </div>
        {/* content */}
        <div className="max-w-[577px]">
          <h3 className="mb-[28px] text-[50px] leading-[55px] font-bold text-[#0F0E0E]">
            Custom-Built Frontend & <br /> Backend Solutions
          </h3>
          <p className="text-2xl leading-[40px]">
            Our team designs user-friendly and responsive frontends while
            building powerful and secure backends to support your applications.
          </p>
        </div>
      </div>

      {/* development capabilities */}
      <div className="mx-auto flex max-w-[1209px] flex-col items-center justify-between">
        <h3 className="mb-[28px] text-[50px] leading-[76px] font-bold text-[#100F0F]">
          Development Capabilities
        </h3>

        <div className="grid grid-cols-2 gap-[25px]">
          {developmentCapabilities?.map((capability, index) => (
            <div key={index} className="flex justify-between bg-[#EBEBEB] p-5">
              <div className="flex gap-x-3">
                {/* icon */}
                <div className="mt-2 h-fit">
                  <Icon
                    icon={capability.icon}
                    width={38}
                    height={38}
                    color="#787878"
                  />
                </div>
                <div className="">
                  <h3 className="text-[30px] font-bold">
                    {capability?.serviceName}
                  </h3>
                  <p className="text-[18px] leading-[28px]">
                    {capability?.description}
                  </p>
                </div>
              </div>
              {/* arrow icon */}
              <button className="cursor-pointer">
                <ChevronRight size={40} color="#787878" strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
