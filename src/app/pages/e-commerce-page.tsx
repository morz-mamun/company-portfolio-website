import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import {
  letsBuildFutureBusinessData,
  serviceDescriptionData,
  whyChooseUsData,
} from '@/constants/what-we-do-data/e-commerce-data';
import { eCommerceBannerData } from '@/constants/banner-data/e-commerce-banner-data';
import ExploreOurSolution from '@/components/what-we-do/e-commerce/explore-our-solution';
import FAQ from '@/components/shared/faq';
import { eCommerceFaqSectionData } from '@/constants/faq-data/e-commerce-faq';

export default function ECommercePage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={eCommerceBannerData}
        descriptionClassName="!max-w-[920px]"
      />
      <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
        {/* service description section */}
        <div className="mt-10 lg:mt-14">
          <ServiceDescription sectionData={serviceDescriptionData} />
        </div>
        {/* explore our services / solutions */}
        <div className="my-5 md:my-14">
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

        {/* FAQ section */}
        <div className="mb-10 md:mb-20">
          <FAQ data={eCommerceFaqSectionData} />
        </div>
      </main>
    </div>
  );
}
