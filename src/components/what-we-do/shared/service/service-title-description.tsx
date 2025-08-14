type TData = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export default function ServiceTitleAndDescription({
  data,
  className,
}: {
  data: TData;
  className?: string;
}) {
  return (
    <div className={`col-span-2 flex flex-col space-y-5 ${className}`}>
      <h3 className="font-space-grotesk text-[32px] font-bold">
        {data?.title}
      </h3>
      <p className="text-brand/70">{data?.description}</p>
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
