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
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <HomeBanner />
      {/* <div className="mt-20 md:mt-28 lg:mt-32">
      </div> */}
      {/* Video Section */}
      <div className="px-2 lg:px-0">
        <VideoSection />
      </div>

      {/* Trusted By Section */}
      <div className="">
        <TrustedBy />
      </div>

      {/* our services */}
      <div>
        <OurServices />
      </div>

      {/* Explore Services */}
      <div className="my-10 border-y md:my-20">
        <ExploreServices />
      </div>

      {/* How We Manage Work */}
      <div className="my-10 md:my-20">
        <HowWeManageWork />
      </div>

      {/* Testimonial Carousel */}
      <div className="mb-10 md:mb-20">
        <TestimonialCarousel />
      </div>

      {/* Our latest blogs */}
      <div className="mb-10 md:mb-20">
        <OurBlogs />
      </div>

      {/* joining our team */}
      <JoiningOurTeam />

      {/* FAQ Section */}
      <div className="my-10 md:my-20">
        <FAQ data={homePageFaqSectionData} />
      </div>

      {/* Contact us */}
      <div className="mb-10 md:mb-20">
        <ContactUs />
      </div>

      {/* user feedbacks and book your strategy call */}
      <div>
        <TransformIdeaToReality />
      </div>
    </main>
  );
}
