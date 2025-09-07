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
    <div className="mx-2 mt-[28px] max-w-5xl text-center lg:mx-auto">
      {/* Content title with animation for desktop */}
      <TextAnimate
        as="h1"
        delay={0.1}
        duration={1}
        by="character"
        animation="fadeIn"
        className="font-space-grotesk hidden bg-gradient-to-b from-[#011659] via-[#0A2F89] to-[#1F55BB] bg-clip-text text-3xl font-bold text-transparent md:text-[48px] lg:mx-20 lg:block lg:text-[40px] xl:mx-0 xl:text-[50px] dark:bg-gradient-to-b dark:from-[#3B82F6] dark:via-[#274690] dark:to-[#1A2A6C]"
      >
        {title}
      </TextAnimate>

      {/* Content title with animation for mobile */}
      <div className="lg:hidden">
        <AnimatedText data={mobileTitle} />
      </div>
      {/* Content description */}
      <p
        className={`${descriptionClassName} text-brand/80 dark:text-primary/70 mx-auto mt-[14px] max-w-[320px] text-sm md:max-w-[800px] md:text-xl`}
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
