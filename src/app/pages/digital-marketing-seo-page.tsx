import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import {
  letsBuildFutureBusinessData,
  serviceDescriptionData,
  whyChooseUsData,
} from '@/constants/what-we-do-data/digital-marketing-seo-data';
import { digitalMarketingSeoBannerData } from '@/constants/banner-data/digital-marketing-seo-banner-data';
import ExploreOurSolution from '@/components/what-we-do/digital-marketing-seo/explore-our-solution';
import FAQ from '@/components/shared/faq';
import { digitalMarketingSeoFaqSectionData } from '@/constants/faq-data/digital-marketing-seo-faq';

export default function DigitalMarketingAndSeoPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={digitalMarketingSeoBannerData}
        className="!h-[280px] md:!h-[350px] lg:!h-[400px]"
        descriptionClassName="!max-w-[920px]"
      />
      <main className="min-h-screen overflow-hidden">
        <div className="mx-auto max-w-7xl overflow-hidden">
          {/* service description section */}
          <div className="">
            <ServiceDescription
              sectionData={serviceDescriptionData}
              TitleClassName="md:!max-w-xl"
            />
          </div>
          {/* explore our services / solutions */}
          <div className="my-5 md:my-14">
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
          <FAQ data={digitalMarketingSeoFaqSectionData} />
        </div>
      </main>
    </div>
  );
}
