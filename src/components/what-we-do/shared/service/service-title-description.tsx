'use client';
import CalDrawer from '@/components/shared/cal-drawer';
import { TSubServiceTitleAndDescription } from '@/types/services';

export default function ServiceTitleAndDescription({
  data,
  className,
}: {
  data: TSubServiceTitleAndDescription;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex flex-col space-y-4 lg:col-span-2 lg:mx-0 lg:space-y-5 ${className}`}
    >
      {data.isLink ? (
        <CalDrawer
          button={
            <h3
              role="button"
              tabIndex={0}
              className="font-inter cursor-pointer text-lg leading-10 font-bold md:text-[32px]"
            >
              {data?.title}
            </h3>
          }
        />
      ) : (
        <h3 className="font-inter text-lg font-bold md:text-[32px]">
          {data?.title}
        </h3>
      )}
      {/* <h3 className="font-inter text-lg font-bold md:text-[32px]">
        {data?.title}
      </h3> */}
      <p className="text-brand dark:text-primary/70 text-sm md:text-base">
        {data?.description}
      </p>
      {/* image */}
      <div className="flex-1 overflow-hidden rounded-[24px] border">
        <img
          className="h-full w-full object-cover"
          src={data?.image}
          alt={data?.imageAlt}
        />
      </div>
    </div>
  );
}
