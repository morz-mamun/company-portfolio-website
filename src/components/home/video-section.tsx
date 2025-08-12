import HeroVideoDialog from '../magicui/hero-video-dialog';
import { ShineBorder } from '../magicui/shine-border';

export default function VideoSection() {
  return (
    <section className="relative mx-auto my-16 max-w-screen-xl">
      <div className="mx-auto max-w-screen-lg">
        <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
          <div className="relative">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="/banner.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="/banner.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
        <div className="from-background via-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent md:-bottom-0 lg:-bottom-12 lg:h-2/4"></div>
      </div>
    </section>
  );
}
