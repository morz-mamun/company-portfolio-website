import { TSubServices } from '@/types/services';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function SubServiceCard({ item }: { item: TSubServices }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 rounded-[12px] border border-[#DBDBDB] px-[6px] py-5 shadow-[0_2px_4.8px_1px_rgba(0,0,0,0.25)] md:space-y-5 md:py-12 dark:border-[#3D3D3D]">
      <Icon
        icon={item?.icon}
        className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
      />
      <p className="text-brand/70 dark:text-primary/70 text-center text-xs md:text-base">
        {item?.title}
      </p>
    </div>
  );
}
