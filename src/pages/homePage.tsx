import AiAutomation from '@/components/home/ai-automation';
import Analytics from '@/components/home/analytics';
import Banner from '@/components/home/banner';
import OtherServices from '@/components/home/other-services';
import OurServices from '@/components/home/our-services';
import PrimaryBtn from '@/components/shared/primary-btn';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Banner Section */}
      <Banner />
      {/* Our Services */}
      <OurServices />
      {/* analytics */}
      <Analytics />
      {/* Other Services */}
      <OtherServices />
      {/* Ai Automation */}
      <AiAutomation />
    </main>
  );
}
