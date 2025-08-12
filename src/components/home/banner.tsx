'use client';
import { homeBannerData } from '@/constants/banner-data/home-banner-data';
import BannerTitleBtn from '../buttons/banner-title-btn';
import BannerTitleAndDescription from '../shared/banner-title-description';

export default function Banner() {
  const { title, description } = homeBannerData;
  return (
    <section className="">
      <BannerTitleBtn />
      {/* Banner title and description */}
      <BannerTitleAndDescription title={title} description={description} />
    </section>
  );
}
