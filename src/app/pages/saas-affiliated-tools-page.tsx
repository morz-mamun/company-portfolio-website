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
import FAQ from '@/components/shared/faq';
import { saasAffiliatedToolsFaqSectionData } from '@/constants/faq-data/saas-affiliated-tools-faq';

export default function SaasAffiliatedToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={saasAffiliatedToolsBannerData}
        className="!h-[280px] md:!h-[350px] lg:!h-[400px]"
        descriptionClassName="!max-w-[920px]"
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

        {/* FAQ section */}
        <div className="mb-10 md:mb-20">
          <FAQ data={saasAffiliatedToolsFaqSectionData} />
        </div>
      </main>
    </div>
  );
}
