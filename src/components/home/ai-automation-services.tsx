import { Icon } from '@iconify/react';

import { ChevronRight } from 'lucide-react';
import SectionHeadingGradient from '../shared/sectionHeadingGradient';
const aiAutomationServices = [
  {
    icon: 'nimbus:marketing',
    serviceName: 'Marketing Automation',
    description:
      'Automate workflows for campaigns, emails and social media engagements.',
  },
  {
    icon: 'hugeicons:note-03',
    serviceName: 'Lead Scoring & Nurturing',
    description:
      'Utilize AI to identify high-vac prospects and personalize messaging.',
  },
  {
    icon: 'mage:robot',
    serviceName: 'AI Agents & Chatbots',
    description:
      'Implement conversational AI for lead qualification or customer support.',
  },
  {
    icon: 'fluent:data-usage-28-regular',
    serviceName: 'Data-Driven Insights',
    description:
      'Analyze customer data for able insights and reporting with AI.',
  },
];

export default function AiAutomationServices() {
  return (
    <section className="">
      <SectionHeadingGradient
        title="AI Automation Services"
        description="Supercharge your marketing with intelligent automation solution."
      />
      <div className="mx-auto flex max-w-[910px] flex-col gap-y-[22px]">
        {aiAutomationServices?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between bg-[#EBEBEB] px-5 py-[38px]"
            >
              <div className="flex items-baseline gap-x-3">
                {/* icon */}
                <Icon icon={item.icon} width={38} height={38} color="#787878" />
                <div>
                  <h3 className="text-[50px] font-bold">{item?.serviceName}</h3>
                  <p className="text-[18px] leading-[28px]">
                    {item?.description}
                  </p>
                </div>
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
