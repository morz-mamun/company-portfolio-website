import { formatDate } from '@/utils/formatDate';
import { BorderBeam } from '../magicui/border-beam';
import Link from 'next/link';
import { TBlog } from '@/types/blog';

export default function BlogCard({
  blog,
  hasBorder,
}: {
  blog: TBlog;
  hasBorder?: boolean;
}) {
  const { featuredImage, slug, category, title, meta, id, createdAt, tags } =
    blog;
  const imageUrl =
    featuredImage?.url ||
    'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';

  const shortTitle = title?.length > 75 ? title?.slice(0, 75) + '...' : title;
  const description = meta?.description as string;
  const shortDescription =
    description?.length > 100
      ? description?.slice(0, 100) + '...'
      : description;

  return (
    <Link href={`/blogs/${category?.name}/${slug}`}>
      <div
        key={id}
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
        <div className="space-y-3 transition duration-200 group-hover/bento:translate-x-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {formatDate(createdAt)}
            </p>
            {/* showing tags */}
            <div className="flex flex-wrap">
              {tags?.slice(0, 2).map((tag) => {
                return (
                  // make box for each tag
                  <span
                    className="mr-2 rounded-sm border bg-[#F4F4F4] px-1 py-[2px] text-[12px] font-medium"
                    key={tag?.id}
                  >
                    {tag?.label}
                  </span>
                );
              })}
            </div>
          </div>
          <h3 className="text-brand min-h-12 font-bold dark:text-neutral-200">
            {shortTitle}
          </h3>
          <p className="text-brand/90 dark:text-neutral-300">
            {shortDescription}
          </p>
        </div>
        {hasBorder && <BorderBeam />}
      </div>
    </Link>
  );
}
