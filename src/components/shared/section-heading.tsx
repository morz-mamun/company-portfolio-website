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
    <div
      className={`mx-auto max-w-[1050px] space-y-3 text-center ${className}`}
    >
      <h2
        className={`font-inter text-brand dark:text-primary text-[22px] font-bold md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`${descriptionClassName} text-brand mx-auto max-w-[320px] text-sm text-balance md:mb-14 md:max-w-[650px] md:text-base lg:max-w-[750px] lg:text-xl dark:text-white/80`}
      >
        {description}
      </p>
    </div>
  );
}
