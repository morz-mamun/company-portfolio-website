import Chat from '@/components/chat/chat';
import AiAutomationServices from '@/components/home/ai-automation-services';
import Analytics from '@/components/home/analytics';
import Banner from '@/components/home/banner';
import Blogs from '@/components/home/blogs';
import Development from '@/components/home/development';
import Feedback from '@/components/home/feedback';
import OtherServices from '@/components/home/other-services';
import OurServices from '@/components/home/our-services';
import SasAndAffiliateTool from '@/components/home/sas-affiliate-tool';
import SeoAndMarketing from '@/components/home/seo-marketing';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Banner Section */}
      <Banner />
      {/* Test chat interface */}
      <Chat />
      {/* Our Services */}
      <OurServices />
      {/* analytics */}
      <Analytics />
      {/* Other Services */}
      <OtherServices />
      {/* Ai Automation services */}
      <AiAutomationServices />
      {/* Development section */}
      <Development />
      {/* SEO and Marketing */}
      <SeoAndMarketing />
      {/* Sas & Affiliate tools */}
      <SasAndAffiliateTool />
      {/* Feedback */}
      <Feedback />
      {/* Blogs */}
      <Blogs />
    </main>
  );
}
