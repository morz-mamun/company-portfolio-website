export default function SectionHeadingGradient({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="my-[70px] flex items-center justify-center bg-[linear-gradient(to_right,_#000000,_#C8102E,_#C8102E,_#0D0D0D)] py-[35px]">
      <div className="max-w-[814px] text-center text-white">
        <h3 className="text-[50px] leading-[76px] font-bold">{title}</h3>
        <p className="text-2xl">{description}</p>
      </div>
    </section>
  );
}
