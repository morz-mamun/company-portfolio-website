import Banner from '@/components/home/banner';
import FAQ from '@/components/home/faq';
import HowWeManageWork from '@/components/home/how-we-manage-work/how-we-manage-work';
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

      {/* How We Manage Work */}
      <div className="my-20">
        <HowWeManageWork />
      </div>

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
