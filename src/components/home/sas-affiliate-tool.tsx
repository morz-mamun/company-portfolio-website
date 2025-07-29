import { Icon } from '@iconify/react';
import SectionHeadingGradient from '../shared/sectionHeadingGradient';
import { ChevronRight } from 'lucide-react';
const sasAndAffiliateTool = [
  {
    icon: 'carbon:ibm-saas-console',
    serviceName: 'Micro SaaS Platforms',
    description:
      'Develop and deploy niche SaaS applications to solve specific business challenges and generate recurring revenue.',
  },
  {
    icon: 'hugeicons:web-design-01',
    serviceName: 'Dashboard & UI Design',
    description:
      'Create intuitive, data driven dashboards and user interfaces that enhance user experience and engagement.',
  },
  {
    icon: 'tabler:affiliate',
    serviceName: 'Affiliate Automation',
    description:
      'Build automated tools to track, manage and optimize affiliate marketing campaigns for maximum efficiency.',
  },
  {
    icon: 'material-symbols:api',
    serviceName: 'API-Based Products',
    description:
      'Design and develop API first digital products that integrate seamlessly with existing systems and platforms.',
  },
];
export default function SasAndAffiliateTool() {
  return (
    <section>
      <SectionHeadingGradient
        title="SaaS & Affiliate tools"
        description="Building and Launching Powerful, Automated Digital Products."
      />

      <div className="mx-auto flex max-w-[910px] flex-col gap-y-[22px]">
        {sasAndAffiliateTool?.map((item, index) => {
          return (
            <div key={index} className="flex justify-between bg-[#EBEBEB] p-5">
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
    </section>
  );
}
