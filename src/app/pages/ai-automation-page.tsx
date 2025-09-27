import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import ExploreOurSolution from '@/components/what-we-do/ai-automation/explore-our-solution';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import {
  letsBuildFutureBusinessData,
  serviceDescriptionData,
  whyChooseUsData,
} from '@/constants/what-we-do-data/ai-automation-data';
import { aiAutomationBannerData } from '@/constants/banner-data/ai-automation-banner-data';
import FAQ from '@/components/shared/faq';
import { aiAutomationFaqSectionData } from '@/constants/faq-data/ai-automation-faq';

export default function AiAutomationPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <BannerTitleAndDescription sectionData={aiAutomationBannerData} />
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
      {/* let's build future of your business */}
      <div>
        <LetsBuildFutureBusiness sectionData={letsBuildFutureBusinessData} />
      </div>

      {/* FAQ section */}
      <div className="mb-10 md:mb-20">
        <FAQ data={aiAutomationFaqSectionData} />
      </div>
    </main>
  );
}
