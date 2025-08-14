import PrimaryBtn from '@/components/buttons/primary-btn';
import ServiceTitleAndDescription from './service-title-description';
import { TServices } from '@/constants/what-we-do-data/ai-automation-data';
import SubServiceCard from '@/components/cards/sub-service-card';

export default function Service({ sectionData }: { sectionData: TServices }) {
  const { data, subServices, styleClasses } = sectionData;
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-5 gap-10">
        <ServiceTitleAndDescription
          className={styleClasses?.ServiceTitleAndDescriptionClass}
          data={data}
        />
        {/* sub services */}
        <div className={`col-span-3 ${styleClasses?.subServicesClass}`}>
          <div className={`flex flex-col items-center`}>
            <div className="grid grid-cols-2 gap-5">
              {subServices?.map((item, index) => (
                <SubServiceCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* book now button */}
      <PrimaryBtn title="Book Now" iconName="" className="mt-10" />
    </div>
  );
}
