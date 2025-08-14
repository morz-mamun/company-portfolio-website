import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import ExploreOurSolution from '@/components/what-we-do/ai-automation/explore-our-solution';
import ServiceDescription from '@/components/what-we-do/shared/service-description';
import { webAndSoftwareDevelopmentBannerData } from '@/constants/banner-data/web-software-development-data';
import { serviceDescriptionData } from '@/constants/what-we-do-data/web-software-development-data';

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
        <ServiceDescription sectionData={serviceDescriptionData} />
      </div>
      {/* explore our services / solutions */}
      <div className="my-14">
        <ExploreOurSolution />
      </div>
      {/* why client choose us */}
      {/* <div className="my-14">
           <WhyChooseUs />
         </div> */}
      {/* let's build future of your business */}
      {/* <div>
           <LetsBuildFutureBusiness sectionData={letsBuildFutureBusinessData} />
         </div> */}
    </main>
  );
}
