'use client';
import { TSubServices } from '@/constants/what-we-do-data/ai-automation-data';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function SubServiceCard({ item }: { item: TSubServices }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 rounded-[12px] border border-[#DBDBDB] px-2 py-12 shadow-[0_2px_4.8px_1px_rgba(0,0,0,0.25)]">
      <Icon icon={item?.icon} width={80} height={80} color="#3D3D3D" />
      <p className="text-brand/70 dark:text-primary/70 text-center">
        {item?.title}
      </p>
    </div>
  );
}
