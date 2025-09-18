'use client';
import { homeBannerData } from '@/constants/banner-data/home-banner-data';
import BannerTitleAndDescription from '../shared/banner-title-description';

export default function HomeBanner() {
  return (
    <section className="">
      {/* Banner title and description */}
      <BannerTitleAndDescription sectionData={homeBannerData} />
    </section>
  );
}
