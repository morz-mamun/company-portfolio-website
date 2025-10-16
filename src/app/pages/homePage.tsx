import HomeBanner from '@/components/home/banner';
import ContactUs from '@/components/home/contact-us';
import ExploreServices from '@/components/home/explore-services';
import FAQ from '@/components/shared/faq';
import HowWeManageWork from '@/components/home/how-we-manage-work/how-we-manage-work';
import JoiningOurTeam from '@/components/home/joining-our-team';
import OurBlogs from '@/components/home/our-blogs';
import OurServices from '@/components/home/our-services/our-services';
import TestimonialCarousel from '@/components/home/testimonial-carousel/testimonial-carousel';
import TransformIdeaToReality from '@/components/home/transform-idea-to-reality/transform-idea-to-reality';
import TrustedBy from '@/components/home/trusted-by';
import VideoSection from '@/components/home/video-section';
import { homePageFaqSectionData } from '@/constants/faq-data/home-page-faq';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <HomeBanner />
      <main className="mx-auto min-h-screen overflow-hidden">
        <div className="mx-auto max-w-7xl">
          {/* Video Section */}
          <div className="px-4 md:px-12 lg:px-0">
            <VideoSection />
          </div>

          {/* Trusted By Section */}
          <div className="">
            <TrustedBy />
          </div>

          <div className="px-1 md:px-0">
            {/* our services */}
            <div>
              <OurServices />
            </div>
          </div>
        </div>
        {/* Explore Services */}
        <div className="my-10 md:my-20">
          <ExploreServices />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* How We Manage Work */}
          <div className="my-10 md:my-20">
            <HowWeManageWork />
          </div>

          {/* Testimonial Carousel */}
          <div className="mb-10 md:mb-20">
            <TestimonialCarousel />
          </div>

          {/* Our latest blogs */}
          <div className="mb-10 px-1 md:mb-20 md:px-0">
            <OurBlogs />
          </div>

          {/* joining our team */}
          <JoiningOurTeam />

          {/* FAQ Section */}
          <div className="my-10 md:my-20">
            <FAQ data={homePageFaqSectionData} />
          </div>

          {/* Contact us */}
          <div className="mb-10 px-2 md:mb-20 md:px-0">
            <ContactUs />
          </div>

          {/* user feedbacks and book your strategy call */}
        </div>
        <div>
          <TransformIdeaToReality />
        </div>
      </main>
    </div>
  );
}
