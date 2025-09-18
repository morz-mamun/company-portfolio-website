'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import InlineWidget from '@calcom/embed-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export default function PrimaryBtn({
  title,
  iconName,
  className,
  showCalDrawer = true,
  onClick,
}: {
  title: string;
  iconName: string;
  className?: string;
  showCalDrawer?: boolean;
  onClick?: () => void;
}) {
  const button = (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-b from-[#0908C3] to-[#0C34E9] px-6 py-3 text-xs font-semibold text-white shadow-[inset_2px_3px_9px_0_rgba(0,0,0,0.25)] backdrop-blur-[5px] transition duration-200 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-[#000EAC] hover:to-[#00163C] hover:font-bold hover:shadow-sm md:text-base ${className}`}
    >
      <span>{title}</span>
      <Icon icon={iconName} width={20} height={20} />
    </button>
  );
  if (!showCalDrawer) return button;
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent className="overflow-x-hidden overflow-y-scroll">
        <DrawerHeader className="">
          <DrawerTitle className="text-center capitalize">
            Schedule a Meeting
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex-1">
          {/* Cal.com embed */}
          <InlineWidget calLink="md-morshed-alam-hp8ddu/30min" />
        </div>

        {/* Cal.com embed with iframe */}
        {/* <div className="flex-1 overflow-hidden px-4 pb-4">
          <iframe
            src="https://cal.com/md-morshed-alam-hp8ddu/30min"
            className="h-full w-full rounded-lg border-0"
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
          />
        </div> */}
      </DrawerContent>
    </Drawer>
  );
}
