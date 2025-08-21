import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import { whoWeAreBannerData } from '@/constants/banner-data/who-we-are-banner-data';

export default function WhoWeArePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <div className="mt-20 md:mt-28">
        <BannerTitleAndDescription
          sectionData={whoWeAreBannerData}
          descriptionClassName="md:!max-w-[600px] !max-w-[350px]"
        />
      </div>
    </main>
  );
}
