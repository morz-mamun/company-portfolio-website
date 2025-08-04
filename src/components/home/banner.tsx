import BannerTitleBtn from '../buttons/banner-title-btn';
import { Button } from '../ui/button';

export default function Banner() {
  return (
    <section className="">
      <BannerTitleBtn />
      {/* content */}
      <div className="mx-auto mt-[28px] max-w-5xl text-center">
        {/* Content title */}
        <h1 className="font-space-grotesk bg-[linear-gradient(to_bottom,_#100F0F,_#5C5B5B)] bg-clip-text text-[50px] font-bold text-transparent">
          Empowering Business with AI automation, Digital Marketing & Technology
          Solutions
        </h1>
        {/* Content description */}
        <p className="text-brand/80 mx-auto mt-[14px] max-w-[800px] text-xl">
          We build smarter systems, powerful websites and scalable automation
          workflows for modern brands, ecommerce stores and SaaS platforms
          across the U.S and beyond.
        </p>

        {/* Get free discovery call button */}
        <Button
          variant="default"
          className="bg-brand mt-10 rounded-full text-white"
        >
          Get free discovery call
        </Button>
      </div>
    </section>
  );
}
