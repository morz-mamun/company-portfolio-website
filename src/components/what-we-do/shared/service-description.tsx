import { TServiceDescription } from '@/types/services';

export default function ServiceDescription({
  sectionData,
  TitleClassName,
  descriptionTwoClassName,
}: {
  sectionData: TServiceDescription;
  TitleClassName?: string;
  descriptionTwoClassName?: string;
}) {
  const { title, descriptionOne, descriptionTwo, image } = sectionData;
  return (
    <section className="bg-[#FAFAFA] p-10 shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto grid max-w-7xl grid-cols-5 gap-10 p-8">
        {/* image */}
        <div className="col-span-2 h-full">
          <img
            className="h-full rounded-[32px] object-cover"
            src={image}
            alt="ai-automation"
          />
        </div>
        {/* description */}
        <div className="col-span-3 space-y-4">
          <h3
            className={`${TitleClassName} text-brand dark:text-primary font-space-grotesk text-[30px] font-bold`}
          >
            {title}
          </h3>
          <div className="max-w-xl">
            <p className="text-brand/70 dark:text-primary/70">
              {descriptionOne}
            </p>
            <p
              className={`text-brand/70 dark:text-primary/70 ${descriptionTwoClassName}`}
            >
              {descriptionTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
