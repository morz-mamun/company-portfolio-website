export default function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`${className} mx-auto max-w-[640px] space-y-3 text-center`}>
      <h2
        className={`font-space-grotesk text-brand dark:text-primary text-2xl font-bold md:text-4xl`}
      >
        {title}
      </h2>
      <p
        className={`text-brand/90 dark:text-primary/70 mx-auto max-w-[320px] text-sm md:max-w-[560px] md:text-xl lg:w-full`}
      >
        {description}
      </p>
    </div>
  );
}
