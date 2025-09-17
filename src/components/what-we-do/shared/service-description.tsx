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
    <section className="bg-[#FAFAFA] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] md:p-10 dark:bg-[#030712]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 p-4 md:p-6 lg:grid-cols-5 lg:p-8">
        {/* image */}
        <div className="col-span-1 h-full w-full lg:col-span-2">
          <img
            className="h-full w-full rounded-[32px] object-cover"
            src={image}
            alt="ai-automation"
          />
        </div>
        {/* description */}
        <div className="col-span-1 mx-auto space-y-4 lg:col-span-3">
          <h2
            className={`text-brand dark:text-primary font-inter mx-auto text-center text-xl font-bold md:text-[30px] lg:mx-0 lg:text-start ${TitleClassName}`}
          >
            {title}
          </h2>
          <div className="max-w-xl space-y-4 text-sm md:text-base">
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
