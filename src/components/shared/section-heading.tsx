export default function SectionHeading({
  title,
  description,
  className,
  descriptionClassName,
  titleClassName,
}: {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`mx-auto max-w-[974px] space-y-3 text-center ${className}`}>
      <h2
        className={`font-inter text-brand dark:text-primary text-[22px] font-bold md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`${descriptionClassName} text-brand/90 dark:text-primary/70 mx-auto max-w-[320px] text-sm md:mb-14 md:max-w-[650px] md:text-base lg:max-w-[750px] lg:text-xl`}
      >
        {description}
      </p>
    </div>
  );
}
