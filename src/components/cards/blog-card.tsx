import { formatDate } from '@/utils/formatDate';
import { BorderBeam } from '../magicui/border-beam';

type TBlog = {
  _id: string;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
};

export default function BlogCard({ blog }: { blog: TBlog }) {
  const { _id, imageUrl, date, title, description } = blog;
  return (
    <div
      key={_id}
      className="group/bento shadow-input relative row-span-1 flex cursor-pointer flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
    >
      {/* image */}
      <div className="h-[184px] w-full overflow-hidden rounded-t-xl border">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full rounded-t-xl object-cover transition duration-200 group-hover/bento:scale-105"
        />
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {formatDate(date)}
        </p>
        <h3 className="text-brand mt-2 mb-2 font-bold dark:text-neutral-200">
          {title}
        </h3>
        <p className="text-brand/90 dark:text-neutral-300">{description}</p>
      </div>
      <BorderBeam duration={6} size={300} />
    </div>
  );
}
