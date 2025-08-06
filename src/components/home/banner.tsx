import BannerTitleBtn from '../buttons/banner-title-btn';
import { TextAnimate } from '../magicui/text-animate';
import { Button } from '../ui/button';

export default function Banner() {
  return (
    <section className="">
      <BannerTitleBtn />
      {/* content */}
      <div className="mx-auto mt-[28px] max-w-5xl text-center">
        {/* Content title with animation */}
        <TextAnimate
          as="h2"
          delay={0.1}
          duration={1}
          // startOnView
          // once
          by="character"
          animation="fadeIn"
          className="font-space-grotesk bg-[linear-gradient(to_bottom,_#100F0F,_#5C5B5B)] bg-clip-text text-[50px] font-bold text-transparent"
        >
          Empowering Business with AI automation, Digital Marketing & Technology
          Solutions
        </TextAnimate>
        {/* Content description */}
        <p className="text-brand/80 mx-auto mt-[14px] max-w-[800px] text-xl">
          We build smarter systems, powerful websites and scalable automation
          workflows for modern brands, e-commerce stores and SaaS platforms
          across the U.S and beyond.
        </p>

        {/* Get free discovery call button */}
        <Button className="bg-brand dark:text-brand shadow-primary/60 hover:text-brand dark:hover:bg-brand mt-10 cursor-pointer rounded-full p-6 text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:font-bold dark:hover:text-white">
          Get free discovery call
        </Button>
      </div>
    </section>
  );
}
