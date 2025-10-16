import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import {
  serviceDescriptionData,
  whyChooseUsData,
  letsBuildFutureBusinessData,
} from '@/constants/what-we-do-data/iot-smart-security-data';
import { iotSmartSecurityBannerData } from '@/constants/banner-data/iot-smart-security-banner-data';
import ExploreOurSolution from '@/components/what-we-do/iot-smart-security/explore-our-solution';

export default function IotSmartSecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={iotSmartSecurityBannerData}
        className="!h-[280px] md:!h-[350px] lg:!h-[400px]"
      />
      <main className="min-h-screen overflow-hidden">
        <div className="mx-auto min-h-screen max-w-7xl overflow-hidden">
          {/* service description section */}
          <div className="">
            <ServiceDescription sectionData={serviceDescriptionData} />
          </div>
          {/* explore our services / solutions */}
          <div className="my-14">
            <ExploreOurSolution />
          </div>
          {/* why client choose us */}
          <div className="my-14">
            <WhyChooseUs sectionData={whyChooseUsData} />
          </div>
        </div>
        {/* let's build future of your business */}
        <div>
          <LetsBuildFutureBusiness sectionData={letsBuildFutureBusinessData} />
        </div>
      </main>
    </div>
  );
}
