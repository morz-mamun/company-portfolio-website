import Banner from '@/components/home/banner';
import FAQ from '@/components/home/faq';
import HowWeManageWork from '@/components/home/how-we-manage-work/how-we-manage-work';
import JoiningOurTeam from '@/components/home/joining-our-team';
import OurBlogs from '@/components/home/our-blogs';
import OurServices from '@/components/home/our-services/our-services';
import TestimonialCarousel from '@/components/home/testimonial-carousel/testimonial-carousel';
import TransformIdeaToReality from '@/components/home/transform-idea-to-reality/transform-idea-to-reality';
import TrustedBy from '@/components/home/trusted-by';
import VideoSection from '@/components/home/video-section';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <div className="mt-32">
        <Banner />
      </div>
      {/* Video Section */}
      <div className="">
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

      {/* How We Manage Work */}
      <div className="my-20">
        <HowWeManageWork />
      </div>

      {/* Testimonial Carousel */}
      <div className="mb-20">
        <TestimonialCarousel />
      </div>

      {/* Our latest blogs */}
      <div className="mb-20">
        <OurBlogs />
      </div>

      {/* joining our team */}
      <JoiningOurTeam />

      {/* FAQ Section */}
      <FAQ />

      {/* user feedbacks and book your strategy call */}
      <div>
        <TransformIdeaToReality />
      </div>
    </main>
  );
}
