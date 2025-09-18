import { TSubServices } from '@/types/services';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function SubServiceCard({ item }: { item: TSubServices }) {
  return (
    <div className="group relative cursor-pointer transition duration-300 hover:translate-y-[-2px]">
      {/* Hover Glow Background */}
      <div className="absolute -inset-2 z-0 rounded-[inherit] bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 opacity-0 blur-md transition-all duration-300 ease-out group-hover:opacity-100"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 rounded-[12px] border border-[#DBDBDB] bg-white px-[6px] py-5 shadow-[0_2px_4.8px_1px_rgba(0,0,0,0.25)] md:space-y-5 md:py-12 dark:border-[#3D3D3D] dark:bg-[#111]">
        <Icon
          icon={item?.icon}
          className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
        />
        <p className="text-brand/70 dark:text-primary/70 text-center text-xs md:text-base">
          {item?.title}
        </p>
      </div>
    </div>
  );
}
