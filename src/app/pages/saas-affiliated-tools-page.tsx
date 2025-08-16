import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import {
  letsBuildFutureBusinessData,
  serviceDescriptionData,
  whyChooseUsData,
} from '@/constants/what-we-do-data/saas-affiliated-tools-data';
import { saasAffiliatedToolsBannerData } from '@/constants/banner-data/saas-affiliated-tools-banner-data';
import ExploreOurSolution from '@/components/what-we-do/sass-affiliated-tools/explore-our-solution';

export default function SaasAffiliatedToolsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <div className="mt-20 md:mt-28 lg:mt-32">
        <BannerTitleAndDescription
          sectionData={saasAffiliatedToolsBannerData}
        />
      </div>
      {/* service description section */}
      <div className="mt-14">
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
      {/* let's build future of your business */}
      <div>
        <LetsBuildFutureBusiness sectionData={letsBuildFutureBusinessData} />
      </div>
    </main>
  );
}
