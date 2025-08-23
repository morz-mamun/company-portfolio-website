import SectionHeading from '../shared/section-heading';
import { Marquee } from '../magicui/marquee';
import { reviews } from '@/constants/what-we-do-data/idea-to-reality-review-data';
import ReviewCard from '../home/transform-idea-to-reality/review-card';
import BorderXPattern from '../shared/border-x-pattern';

export default function CustomerReview() {
  const firstRow = reviews?.slice(0, reviews.length / 2);
  const secondRow = reviews?.slice(reviews.length / 2);
  return (
    <div className="py-8 lg:mt-8">
      <SectionHeading
        title="Customer Review"
        description="Hear directly from our clients about their experiences working with us.
Their feedback reflects the quality, reliability, and impact of our solutions."
      />
      {/* review marquee */}
      <div className="relative mt-16 overflow-hidden border-y px-4 lg:px-6">
        <div className="relative border-x py-10 md:py-16 lg:py-20">
          <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstRow?.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover vertical reverse className="[--duration:15s]">
              {secondRow?.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </Marquee>
            <Marquee
              pauseOnHover
              vertical
              className="hidden [--duration:15s] md:flex"
            >
              {secondRow?.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </Marquee>
            <Marquee
              pauseOnHover
              vertical
              reverse
              className="hidden [--duration:15s] lg:flex"
            >
              {secondRow?.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))}
            </Marquee>

            {/* Top gradient */}
            <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
            {/* Bottom gradient */}
            <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
          </div>
          {/* border x design */}
          <BorderXPattern className="-left-4 w-4 lg:-left-6 lg:w-6" />
          <BorderXPattern className="-right-4 w-4 lg:-right-6 lg:w-6" />
        </div>
      </div>
    </div>
  );
}
