import Banner from '@/components/home/banner';
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
    </main>
  );
}
