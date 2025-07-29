import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const otherServices = [
  {
    serviceName: 'Saas Solutions',
    description: 'Develop and scale AI-powered Saas Applications',
  },
  {
    serviceName: 'AI Automation',
    description: 'Streamline business processes with intelligent automation',
  },
  {
    serviceName: 'Sales Automation',
    description: 'Enhance your sales process using AI-powered tools.',
  },
  {
    serviceName: 'SaaS & Affiliate Tools',
    description: 'Develop and scale AI-powered Saas applications',
  },
  {
    serviceName: '',
    description: '',
  },
  {
    serviceName: '',
    description: '',
  },
];

export default function OtherServices() {
  return (
    <section className="mb-[70px] px-20">
      {/* Section Title */}
      <h3 className="mb-[53px] text-[50px] leading-[76px] font-bold">
        Other Services
      </h3>

      {/* Service List */}
      <div className="grid grid-cols-3 gap-11">
        {otherServices?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2 rounded bg-[#EBEBEB] px-5 pt-[6px] pb-5"
            >
              <div className="max-w-[278px]">
                <h3 className="text-[25px] leading-[78px] font-semibold">
                  {item?.serviceName}
                </h3>
                <p className="text-[18px] leading-[28px]">
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
