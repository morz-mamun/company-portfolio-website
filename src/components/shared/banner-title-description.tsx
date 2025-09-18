'use client';

import { useEffect, useState } from 'react';
import BannerTitleBtn from '../buttons/banner-title-btn';
import PrimaryBtn from '../buttons/primary-btn';
import { TextAnimate } from '../magicui/text-animate';
import { TBannerData } from '@/types/banners';

const gradients = [
  'bg-gradient-to-b from-red-200 to-transparent',
  'bg-gradient-to-b from-blue-200 to-transparent',
  'bg-gradient-to-b from-green-200 to-transparent',
  'bg-gradient-to-b from-yellow-200 to-transparent',
  'bg-gradient-to-b from-purple-200 to-transparent',
  'bg-gradient-to-b from-pink-200 to-transparent',
  'bg-gradient-to-b from-indigo-200 to-transparent',
  'bg-gradient-to-b from-teal-200 to-transparent',
  'bg-gradient-to-b from-orange-200 to-transparent',
  'bg-gradient-to-b from-cyan-200 to-transparent',
  'bg-gradient-to-b from-lime-200 to-transparent',
  'bg-gradient-to-b from-emerald-200 to-transparent',
  'bg-gradient-to-b from-violet-200 to-transparent',
  'bg-gradient-to-b from-fuchsia-200 to-transparent',
  'bg-gradient-to-b from-rose-200 to-transparent',
  'bg-gradient-to-b from-sky-200 to-transparent',
  'bg-gradient-to-b from-amber-200 to-transparent',
  'bg-gradient-to-b from-slate-200 to-transparent',
];

export default function BannerTitleAndDescription({
  sectionData,
  className,
  descriptionClassName,
}: {
  sectionData: TBannerData;
  className?: string;
  descriptionClassName?: string;
}) {
  const { title, description, buttonVisivility, titleBtnVisibility } =
    sectionData;

  // Gradient state
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex((prevIndex) =>
        Math.floor(Math.random() * gradients?.length),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${gradients[currentGradientIndex]} mx-auto mt-3 pt-20 text-center transition-all delay-[5000ms] ease-in-out md:mt-7 md:pt-21 lg:pt-28 ${className}`}
    >
      {/* Banner title button */}
      {titleBtnVisibility && (
        <div className="mb-5 md:mb-7">
          <BannerTitleBtn />
        </div>
      )}

      {/* Content title with animation for desktop */}
      <TextAnimate
        as="h1"
        delay={0.1}
        duration={1}
        by="character"
        animation="fadeIn"
        className="font-inter mx-auto max-w-[340px] bg-gradient-to-r from-[#0C34E9] to-[#0A2F89] bg-clip-text text-base font-bold text-transparent md:max-w-[680px] md:text-[32px] md:leading-10 lg:max-w-[800px] lg:text-[38px] lg:leading-12 xl:max-w-5xl xl:text-[48px] xl:leading-[56px] dark:bg-gradient-to-b dark:from-[#3B82F6] dark:via-[#274690] dark:to-[#1A2A6C]"
      >
        {title}
      </TextAnimate>

      {/* Content description */}
      <p
        className={`${descriptionClassName} text-brand dark:text-primary/70 mx-auto mt-3 max-w-[320px] text-xs md:mt-[14px] md:max-w-[610px] md:text-base lg:max-w-[800px] lg:text-xl`}
      >
        {description}
      </p>

      {/* Get free discovery call button */}
      {buttonVisivility && (
        <PrimaryBtn
          title="Get a Free Discovery Call"
          iconName=""
          className="mx-auto mt-5 md:mt-10"
        />
      )}
    </div>
  );
}
