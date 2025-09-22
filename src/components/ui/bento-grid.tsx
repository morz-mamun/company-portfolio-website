'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
        'mx-auto grid max-w-7xl auto-rows-[20rem] grid-cols-1 gap-2 md:auto-rows-[23rem] md:grid-cols-4 lg:grid-cols-6 lg:gap-5',
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
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  link: string;
}) => {
  return (
    <Link
      href={link || '#'}
      className={cn(
        'group relative row-span-1 flex h-full flex-col justify-between rounded-xl',
        'transition duration-200 hover:translate-y-[-1px]',
        className,
      )}
    >
      {/* Hover Glow Background */}
      <div className="absolute -inset-1 z-0 rounded-[inherit] bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 opacity-0 blur-sm transition-all duration-300 ease-out group-hover:opacity-100" />

      {/* Card Content */}
      <div className="relative z-10 flex h-full flex-col justify-between space-y-4 rounded-xl border bg-white p-4 shadow-lg dark:border-white/[0.2] dark:bg-black">
        {/* text */}
        <div>
          <h2 className="font-inter text-brand mt-2 mb-2 font-semibold dark:text-neutral-200">
            {title}
          </h2>
          <p className="text-brand text-xs font-normal md:text-sm dark:text-neutral-300">
            {description}
          </p>
        </div>

        {/* image */}
        <div className="flex w-full flex-1 overflow-hidden rounded-xl">
          <img
            src={image}
            alt="service image"
            className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
};
