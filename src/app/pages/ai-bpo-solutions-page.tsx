import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import FAQ from '@/components/shared/faq';
import { aiBpoSolutionsBannerData } from '@/constants/banner-data/ai-bpo-solutions-banner-data';
import {
  serviceDescriptionData,
  whyChooseUsData,
  letsBuildFutureBusinessData,
} from '@/constants/what-we-do-data/ai-bpo-solutions-data';
import { aiBpoSolutionFaqSectionData } from '@/constants/faq-data/ai-bpo-solution-faq';
import ExploreOurSolution from '@/components/what-we-do/ai-bpo-solution/explore-our-solution';

export default function AiBpoSolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={aiBpoSolutionsBannerData}
        className="!h-[250px] md:!h-[350px]"
      />
      <main className="min-h-screen overflow-hidden">
        <div className="mx-auto max-w-7xl overflow-hidden">
          {/* service description section */}
          <div className="">
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
        <div className="mx-auto mb-10 max-w-7xl md:mb-20">
          <FAQ data={aiBpoSolutionFaqSectionData} />
        </div>
      </main>
    </div>
  );
}
