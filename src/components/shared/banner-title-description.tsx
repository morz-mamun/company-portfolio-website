import PrimaryBtn from '../buttons/primary-btn';
import { TextAnimate } from '../magicui/text-animate';
import AnimatedText from './animated-text';
import { TBannerData } from '@/types/banners';

export default function BannerTitleAndDescription({
  sectionData,
  descriptionClassName,
}: {
  sectionData: TBannerData;
  descriptionClassName?: string;
}) {
  const { title, description, mobileTitle, buttonVisivility } = sectionData;
  return (
    <div className="mx-auto mt-3 max-w-[350px] text-center md:mt-[28px] md:max-w-5xl">
      {/* Content title with animation for desktop */}
      <TextAnimate
        as="h1"
        delay={0.1}
        duration={1}
        by="character"
        animation="fadeIn"
        className="font-inter mx-1 bg-gradient-to-b from-[#011659] via-[#0A2F89] to-[#1F55BB] bg-clip-text text-base font-bold text-transparent md:mx-7 md:text-[32px] lg:mx-20 lg:text-[38px] xl:mx-0 xl:text-[48px] dark:bg-gradient-to-b dark:from-[#3B82F6] dark:via-[#274690] dark:to-[#1A2A6C]"
      >
        {title}
      </TextAnimate>

      {/* Content title with animation for mobile */}
      {/* <div className="lg:hidden">
        <AnimatedText data={mobileTitle} />
      </div> */}
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
