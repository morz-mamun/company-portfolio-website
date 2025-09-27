import { TSubServices } from '@/types/services';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function SubServiceCard({ item }: { item: TSubServices }) {
  return (
    <div className="group relative">
      {/* Hover Glow Background */}
      <div className="absolute -inset-[6px] z-0 rounded-[inherit] bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 opacity-0 blur-md transition-all duration-300 ease-out group-hover:opacity-100"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 rounded-[12px] border border-[#DBDBDB] bg-white py-5 shadow-[0_2px_4.8px_1px_rgba(0,0,0,0.25)] md:space-y-5 md:py-12 dark:border-[#3D3D3D] dark:bg-[#111]">
        <Icon
          icon={item?.icon}
          className="text-4xl text-[#3D3D3D] group-hover:text-[#0908C3] md:text-[80px] dark:text-[#F6F6F6]"
        />
        <p className="text-brand dark:text-primary text-center text-xs text-balance group-hover:text-[#0908C3] md:text-base">
          {item?.title}
        </p>
      </div>
    </div>
  );
}
