import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import ExploreOurSolution from '@/components/what-we-do/web-software-development/explore-our-solution';
import { webAndSoftwareDevelopmentBannerData } from '@/constants/banner-data/web-software-development-data';
import {
  serviceDescriptionData,
  whyChooseUsData,
  letsBuildFutureBusinessData,
} from '@/constants/what-we-do-data/web-software-development-data';

export default function WebAndSoftwareDevlopmentPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <div className="mt-20 md:mt-28 lg:mt-32">
        <BannerTitleAndDescription
          sectionData={webAndSoftwareDevelopmentBannerData}
        />
      </div>
      {/* service description section */}
      <div className="mt-14">
        <ServiceDescription
          sectionData={serviceDescriptionData}
          TitleClassName="max-w-md"
        />
      </div>
      {/* explore our services / solutions */}
      <div className="my-14">
        <ExploreOurSolution />
      </div>
      {/* why client choose us */}
      <div className="my-14">
        <WhyChooseUs sectionData={whyChooseUsData} />
      </div>
      {/* let's build future of your business */}
      <div>
        <LetsBuildFutureBusiness sectionData={letsBuildFutureBusinessData} />
      </div>
    </main>
  );
}
