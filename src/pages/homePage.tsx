import Banner from '@/components/home/banner';
import VideoSection from '@/components/home/video-section';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Banner Section */}
      <Banner />
      {/* Video Section */}
      <VideoSection />
    </main>
  );
}
