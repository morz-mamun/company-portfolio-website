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
        className={`${className} font-space-grotesk text-brand text-4xl font-bold`}
      >
        {title}
      </h2>
      <p className={`${className} text-brand/90 text-xl`}>{description}</p>
    </div>
  );
}
