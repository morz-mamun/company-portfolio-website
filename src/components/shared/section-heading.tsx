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
        className={`${descriptionClassName} text-brand/90 dark:text-primary/70 mx-auto max-w-[320px] text-sm md:max-w-[560px] md:text-xl lg:max-w-[640px]`}
      >
        {description}
      </p>
    </div>
  );
}
