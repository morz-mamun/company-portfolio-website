export default function BorderXPattern({ className }: { className?: string }) {
  // please just width and position as you needed. Ex - "top-0 -left-4 w-4 md:-left-44 md:w-44"
  return (
    <div
      className={`${className} text-primary/5 absolute top-0 h-full [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px]`}
    ></div>
  );
}
