import { cn } from '@/lib/utils';
type TReview = {
  _id: string;
  img: string;
  name: string;
  username: string;
  body: string;
};
const ReviewCard = ({ review }: { review: TReview }) => {
  const { img, name, username, body } = review;
  return (
    <figure
      className={cn(
        'relative h-full w-36 cursor-pointer overflow-hidden rounded-[20px] border p-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:w-52 md:p-4 xl:w-64',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xs font-medium md:text-sm dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium md:text-xs dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-[10px] md:text-xs xl:text-sm">
        {body}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;
