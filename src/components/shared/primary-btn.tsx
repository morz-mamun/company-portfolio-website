export default function PrimaryBtn({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      className={`${className} bg-brand p-5 text-[22px] font-bold text-white`}
    >
      {label}
    </button>
  );
}

// note : If you want to change the color of the button, you can use the following code:
// bg-[linear-gradient(to_bottom,_#E3415C,_#970C23,_#0D0C0C)]
