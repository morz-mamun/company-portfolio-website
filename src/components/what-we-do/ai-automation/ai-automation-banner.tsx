import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import { aiAutomationBannerData } from '@/constants/banner-data/ai-automation-data';
import React from 'react';

export default function AiAutomationBanner() {
  const { title, description } = aiAutomationBannerData;
  return (
    <section className="">
      {/* Banner title and description */}
      <BannerTitleAndDescription title={title} description={description} />
    </section>
  );
}
