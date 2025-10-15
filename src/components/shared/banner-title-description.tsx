'use client';

import { TextAnimate } from '../magicui/text-animate';
import BannerTitleBtn from '../buttons/banner-title-btn';
import PrimaryBtn from '../buttons/primary-btn';
import type { TBannerData } from '@/types/banners';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';

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

  return (
    <BackgroundBeamsWithCollision>
      <div
        className={`relative z-20 mx-auto mt-3 overflow-hidden pt-20 text-center md:mt-7 md:pt-21 lg:pt-28 ${className}`}
      >
        {/* Light mode animated gradient background with fade bottom */}
        <div className="animate-gradient-slow fade-bottom absolute inset-0 -z-10 dark:hidden"></div>

        {/* Dark mode animated gradient background with fade bottom */}
        <div className="animate-gradient-slow-dark fade-bottom absolute inset-0 -z-10 hidden dark:block"></div>

        {/* Banner title button */}
        {titleBtnVisibility && (
          <div className="mb-5 md:mb-7">
            <BannerTitleBtn />
          </div>
        )}

        {/* Content title */}
        <TextAnimate
          as="h1"
          delay={0.1}
          duration={1}
          by="character"
          animation="fadeIn"
          className="font-inter mx-auto max-w-[340px] bg-gradient-to-r from-[#0C34E9] to-[#0A2F89] bg-clip-text text-base font-bold text-transparent md:max-w-[680px] md:text-[32px] md:leading-10 lg:max-w-[800px] lg:text-[38px] lg:leading-12 xl:max-w-5xl xl:text-[48px] xl:leading-[56px] dark:bg-gradient-to-b dark:from-[#60A5FA] dark:via-[#3B82F6] dark:to-[#2563EB]"
        >
          {title}
        </TextAnimate>

        {/* Content description */}
        <p
          className={`${descriptionClassName} text-brand dark:text-foreground/80 mx-auto mt-3 max-w-[350px] text-xs text-balance md:mt-[14px] md:max-w-[610px] md:text-base lg:max-w-[800px] lg:text-xl`}
        >
          {description}
        </p>

        {/* Button */}
        {buttonVisivility && (
          <PrimaryBtn
            title="Get a Free Discovery Call"
            iconName=""
            className="mx-auto mt-5 md:mt-10"
          />
        )}

        {/* Tailwind custom CSS for gradient animation + fade */}
        <style jsx>{`
          /* Light mode gradient */
          .animate-gradient-slow {
            background: linear-gradient(
              -45deg,
              #fef9c3,
              #bfdbfe,
              #bbf7d0,
              #fbcfe8,
              #c7d2fe
            );
            background-size: 400% 400%;
            animation: gradientShift 30s ease infinite;
          }

          /* Dark mode gradient with deeper, more sophisticated colors */
          .animate-gradient-slow-dark {
            background: linear-gradient(
              -45deg,
              #1e293b,
              #1e3a8a,
              #064e3b,
              #831843,
              #312e81
            );
            background-size: 400% 400%;
            animation: gradientShift 30s ease infinite;
          }

          /* Fade out at bottom */
          .fade-bottom {
            -webkit-mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: top;
            -webkit-mask-size: 100% 100%;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            mask-repeat: no-repeat;
            mask-position: top;
            mask-size: 100% 100%;
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
