import PrimaryBtn from '@/components/buttons/primary-btn';
import { Marquee } from '@/components/magicui/marquee';
import ReviewCard from './review-card';
import IconSvg from './icon-svg';
import { reviews } from '@/constants/what-we-do-data/idea-to-reality-review-data';

const firstRow = reviews?.slice(0, reviews.length / 2);
const secondRow = reviews?.slice(reviews.length / 2);

export default function TransformIdeaToReality() {
  return (
    <section className="border-t">
      {/* client feedback marquee */}
      <div className="py-10 md:py-14">
        <div className="container mx-auto flex w-full flex-col items-center justify-center p-2 md:p-4">
          <div className="relative flex w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:size-32 dark:bg-black/10">
              <IconSvg />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                Let’s Transform Your Idea Into Reality.
              </h3>
              <p className="mb-4 text-base font-medium">
                We are here to help you transform your idea into reality.
              </p>
              <PrimaryBtn
                title="Book your Strategy Call"
                iconName="icons8:right-round"
              />
            </div>
            {/* Rotated marquee group */}
            <div className="absolute rotate-[35deg]">
              <div className="group flex flex-col overflow-hidden p-2 [--duration:20s] [--gap:1rem]">
                <Marquee className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </Marquee>
                <Marquee reverse className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </Marquee>
                <Marquee className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </Marquee>
                <Marquee reverse className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </Marquee>
                <Marquee className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </Marquee>
                <Marquee reverse className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
