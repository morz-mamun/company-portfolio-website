import PrimaryBtn from '@/components/buttons/primary-btn';
import ServiceTitleAndDescription from './service-title-description';
import SubServiceCard from '@/components/cards/sub-service-card';
import { TServices } from '@/types/services';

export default function Service({ sectionData }: { sectionData: TServices }) {
  const { data, subServices, styleClasses } = sectionData;
  return (
    <div className="flex flex-col items-center px-3 md:px-4 lg:px-0">
      <div className="mx-auto grid max-w-6xl gap-4 md:gap-5 lg:grid-cols-5 lg:gap-10">
        <ServiceTitleAndDescription
          className={styleClasses?.ServiceTitleAndDescriptionClass}
          data={data}
        />
        {/* sub services */}
        <div className={`lg:col-span-3 ${styleClasses?.subServicesClass}`}>
          <div className={`flex flex-col items-center`}>
            <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-5">
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
