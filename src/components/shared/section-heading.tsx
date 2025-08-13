export default function SectionHeading({
  title,
  description,
  className,
  titleClassName,
}: {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={`mx-auto max-w-[974px] space-y-3 text-center`}>
      <h2
        className={`font-space-grotesk text-brand dark:text-primary text-xl font-bold md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`${className} text-brand/90 dark:text-primary/70 mx-auto max-w-[320px] text-sm md:max-w-[560px] md:text-xl lg:max-w-[640px]`}
      >
        {description}
      </p>
    </div>
  );
}
