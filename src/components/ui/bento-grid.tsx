import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[23rem] md:grid-cols-6',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex h-full flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className,
      )}
    >
      {/* content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="text-brand mt-2 mb-2 font-bold dark:text-neutral-200">
          {title}
        </div>
        <div className="text-brand/90 text-sm font-normal dark:text-neutral-300">
          {description}
        </div>
      </div>
      {/* image */}
      <div className="flex w-full flex-1 overflow-hidden rounded-xl">
        <img
          src={image}
          alt="service image"
          className="h-full w-full object-cover transition duration-200 group-hover/bento:scale-105"
        />
      </div>
    </div>
  );
};
