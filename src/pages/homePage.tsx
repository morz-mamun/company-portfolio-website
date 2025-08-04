import Banner from '@/components/home/banner';
import FAQ from '@/components/home/faq';
import VideoSection from '@/components/home/video-section';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <div className="mt-32">
        <Banner />
      </div>
      {/* Video Section */}
      <div className="border-b">
        <VideoSection />
      </div>

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
