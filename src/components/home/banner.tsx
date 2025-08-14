'use client';
import { homeBannerData } from '@/constants/banner-data/home-banner-data';
import BannerTitleBtn from '../buttons/banner-title-btn';
import BannerTitleAndDescription from '../shared/banner-title-description';

export default function HomeBanner() {
  return (
    <section className="">
      <BannerTitleBtn />
      {/* Banner title and description */}
      <BannerTitleAndDescription sectionData={homeBannerData} />
    </section>
  );
}
