'use client';
import PrimaryBtn from '@/components/buttons/primary-btn';
import AnalyticsCard from '@/components/cards/analytics-card';
import JoiningOurTeam from '@/components/home/joining-our-team';
import TransformIdeaToReality from '@/components/home/transform-idea-to-reality/transform-idea-to-reality';
import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import SectionHeading from '@/components/shared/section-heading';
import CustomerReview from '@/components/who-we-are/customer-review';
import TeamSection from '@/components/who-we-are/team-section';
import { analyticsData } from '@/constants/analytics-data';
import { whoWeAreBannerData } from '@/constants/banner-data/who-we-are-banner-data';

export default function WhoWeArePage() {
  return (
    <div>
      {/* Banner Section */}
      <BannerTitleAndDescription
        sectionData={whoWeAreBannerData}
        className="!h-[250px] md:!h-[350px] lg:!h-[400px]"
        descriptionClassName="md:!max-w-[600px] !max-w-[350px]"
      />
      <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
        {/* who we are */}
        <div className="mx-3 flex flex-col-reverse items-stretch justify-between gap-8 py-4 md:mx-4 md:flex-row md:gap-10 lg:gap-20 xl:gap-28">
          <div className="flex-1 space-y-5">
            <SectionHeading
              title="Who we are"
              description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et ve interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, perinceptoshimenaeos. Curabitur tempus urna at turpiscondimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, perinceptoshimenaeos. Curabitur tempus urna at turpiscondimentum."
              className="!mx-0 !text-start"
              descriptionClassName="!mx-0 !text-start lg:!text-base md:!text-sm !max-w-[450px]"
            />
            <PrimaryBtn title="Book A Call" iconName="" />
          </div>

          <div className="flex-1 overflow-hidden rounded-[10px] border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800">
            <img
              src="/banner.png"
              alt="who we are"
              className="h-full w-full rounded-[10px] object-cover"
            />
          </div>
        </div>

        {/* Anlytics */}
        <div className="mx-auto my-8 max-w-5xl py-8">
          <SectionHeading title="Analytics" />
          <div className="mx-3 mt-12 grid grid-cols-2 gap-3 md:mx-4 md:grid-cols-4 md:gap-4 lg:mt-16">
            {analyticsData?.map((item) => (
              <AnalyticsCard key={item?.id} item={item} />
            ))}
          </div>
        </div>

        {/* Our story */}
        <div className="mx-3 mt-0 flex flex-col items-stretch justify-between gap-8 md:mx-4 md:mt-16 md:flex-row md:gap-10 md:py-8 lg:mt-24 lg:gap-20 lg:py-12 xl:gap-28">
          {/* Left content */}
          <div className="flex-1 space-y-5">
            <SectionHeading
              title="Our Story"
              description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et ve interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, perinceptoshimenaeos. Curabitur tempus urna at turpiscondimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, perinceptoshimenaeos. Curabitur tempus urna at turpiscondimentum. Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et ve interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, perinceptoshimenaeos."
              className="!mx-0 !text-start"
              descriptionClassName="!mx-0 !text-start !max-w-[450px] lg:!text-base !text-sm"
            />
            <PrimaryBtn title="Contact Us" iconName="" />
          </div>

          {/* Right image */}
          <div className="flex-1 overflow-hidden rounded-[10px] border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800">
            <img
              src="/banner.png"
              alt="who we are"
              className="h-full w-full rounded-[10px] object-cover"
            />
          </div>
        </div>

        {/* Team */}
        <TeamSection />

        {/* customer review */}
        <CustomerReview />

        {/* join our team */}
        <div>
          <JoiningOurTeam />
        </div>

        {/* lets build future of your business */}
        <div className="mt-8">
          <TransformIdeaToReality />
        </div>
      </main>
    </div>
  );
}
