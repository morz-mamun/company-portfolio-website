import BannerTitleBtn from '../buttons/banner-title-btn';
import PrimaryBtn from '../buttons/primary-btn';
import { TextAnimate } from '../magicui/text-animate';
import { TBannerData } from '@/types/banners';

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
    <div
      className={`${className} mx-auto mt-3 max-w-[350px] pt-17 text-center md:mt-7 md:max-w-5xl md:pt-21 lg:pt-28`}
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
        className="font-inter mx-auto max-w-[340px] bg-gradient-to-b from-[#011659] via-[#0A2F89] to-[#1F55BB] bg-clip-text text-base font-bold text-transparent md:max-w-[680px] md:text-[32px] md:leading-10 lg:max-w-[800px] lg:text-[38px] lg:leading-12 xl:max-w-5xl xl:text-[48px] xl:leading-[64px] dark:bg-gradient-to-b dark:from-[#3B82F6] dark:via-[#274690] dark:to-[#1A2A6C]"
      >
        {title}
      </TextAnimate>
      {/* Content description */}
      <p
        className={`${descriptionClassName} text-brand/80 dark:text-primary/70 mx-auto mt-3 max-w-[320px] text-xs md:mt-[14px] md:max-w-[610px] md:text-base lg:max-w-[800px] lg:text-xl`}
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
