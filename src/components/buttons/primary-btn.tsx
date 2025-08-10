import { Icon } from '@iconify/react/dist/iconify.js';

export default function PrimaryBtn({
  title,
  iconName,
  className,
}: {
  title: string;
  iconName: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-brand dark:bg-primary shadow-primary/60 hover:text-brand dark:hover:bg-brand dark:text-brand flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:font-bold md:text-base dark:hover:text-white ${className}`}
    >
      <span> {title}</span>
      <Icon icon={iconName} width={20} height={20} />
    </button>
  );
}
