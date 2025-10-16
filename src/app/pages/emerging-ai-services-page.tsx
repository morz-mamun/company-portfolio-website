import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import FAQ from '@/components/shared/faq';
import { EmergingAiServicesBannerData } from '@/constants/banner-data/emerging-ai-services-banner-data';
import {
  letsBuildFutureBusinessData,
  serviceDescriptionData,
  whyChooseUsData,
} from '@/constants/what-we-do-data/emerging-ai-services-data';
import ExploreOurSolution from '@/components/what-we-do/emerging-ai-services/explore-our-solution';
import { emergingAiServicesFaqSectionData } from '@/constants/faq-data/emerging-ai-services-faq';

export default function EmergingApiServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={EmergingAiServicesBannerData}
        descriptionClassName="!max-w-[920px]"
      />
      <main className="min-h-screen overflow-hidden">
        <div className="mx-auto min-h-screen max-w-7xl overflow-hidden">
          {/* service description section */}
          <div className="mt-10 lg:mt-14">
            <ServiceDescription
              sectionData={serviceDescriptionData}
              TitleClassName="md:max-w-lg max-w-sm px-[2px]"
              descriptionTwoClassName="mt-3"
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
        </div>
        {/* let's build future of your business */}
        <div>
          <LetsBuildFutureBusiness sectionData={letsBuildFutureBusinessData} />
        </div>

        {/* FAQ section */}
        <div className="mb-10 md:mb-20">
          <FAQ data={emergingAiServicesFaqSectionData} />
        </div>
      </main>
    </div>
  );
}
