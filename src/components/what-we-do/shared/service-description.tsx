import { TServiceDescription } from '@/types/services';

export default function ServiceDescription({
  sectionData,
}: {
  sectionData: TServiceDescription;
}) {
  const { title, descriptionOne, descriptionTwo, image } = sectionData;
  return (
    <section className="bg-[#FAFAFA] p-10 shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto grid max-w-6xl grid-cols-5 gap-10 p-[32px]">
        {/* image */}
        <div className="col-span-2 h-full">
          <img
            className="h-full rounded-[32px] object-cover"
            src={image}
            alt="ai-automation"
          />
        </div>
        {/* description */}
        <div className="col-span-3 space-y-3">
          <h3 className="text-brand dark:text-primary font-space-grotesk max-w-xl text-[32px] font-bold">
            {title}
          </h3>
          <p className="text-brand/70 dark:text-primary/70">{descriptionOne}</p>
          <p className="text-brand/70 dark:text-primary/70">{descriptionTwo}</p>
        </div>
      </div>
    </section>
  );
}
