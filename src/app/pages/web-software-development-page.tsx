import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import FAQ from '@/components/shared/faq';
import LetsBuildFutureBusiness from '@/components/what-we-do/shared/lets-build-future-business';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import WhyChooseUs from '@/components/what-we-do/shared/why-choose-us';
import ExploreOurSolution from '@/components/what-we-do/web-software-development/explore-our-solution';
import { webAndSoftwareDevelopmentBannerData } from '@/constants/banner-data/web-software-development-data';
import { webSoftwareDevelopmentFaqSectionData } from '@/constants/faq-data/web-software-development-faq';
import {
  serviceDescriptionData,
  whyChooseUsData,
  letsBuildFutureBusinessData,
} from '@/constants/what-we-do-data/web-software-development-data';

export default function WebAndSoftwareDevlopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={webAndSoftwareDevelopmentBannerData}
        className="!h-[250px] md:!h-[350px]"
      />
      <main className="min-h-screen overflow-hidden">
        <div className="mx-auto min-h-screen max-w-7xl overflow-hidden">
          {/* service description section */}
          {/* className="mt-10 lg:mt-14" */}
          <div className="">
            <ServiceDescription
              sectionData={serviceDescriptionData}
              TitleClassName="max-w-xl"
            />
          </div>
          {/* explore our services / solutions */}
          <div className="my-10 md:my-14">
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
          <FAQ data={webSoftwareDevelopmentFaqSectionData} />
        </div>
      </main>
    </div>
  );
}
