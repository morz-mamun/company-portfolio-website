import { homeBannerDataForMobile } from '@/constants/banner-data/home-banner-data';
import PrimaryBtn from '../buttons/primary-btn';
import { TextAnimate } from '../magicui/text-animate';
import AnimatedText from './animated-text';

export default function BannerTitleAndDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-2 mt-[28px] max-w-5xl text-center lg:mx-auto">
      {/* Content title with animation for desktop */}
      <TextAnimate
        as="h2"
        delay={0.1}
        duration={1}
        by="character"
        animation="fadeIn"
        className="font-space-grotesk dark:text-primary hidden bg-[linear-gradient(to_bottom,_#100F0F,_#5C5B5B)] bg-clip-text text-3xl font-bold text-transparent md:block md:text-[48px] lg:text-[50px]"
      >
        {title}
        {/* Empowering Business with AI automation, Digital Marketing & Technology
        Solutions */}
      </TextAnimate>
      {/* Content title with animation for mobile */}
      <div className="md:hidden">
        <AnimatedText data={homeBannerDataForMobile} />
      </div>
      {/* Content description */}
      <p className="text-brand/80 dark:text-primary/70 mx-auto mt-[14px] max-w-[320px] text-sm md:max-w-[800px] md:text-xl">
        {description}
        {/* We build smarter systems, powerful websites and scalable automation
        workflows for modern brands, e-commerce stores and SaaS platforms
        across the U.S and beyond. */}
      </p>

      {/* Get free discovery call button */}
      <PrimaryBtn
        title="Get a Free Discovery Call"
        iconName=""
        className="mx-auto mt-5 md:mt-10"
      />
    </div>
  );
}
