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
  showCalDrawer,
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
      className={`bg-brand dark:bg-primary shadow-primary/60 hover:text-brand dark:hover:bg-brand dark:text-brand flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:font-bold md:text-base dark:hover:text-white ${className}`}
    >
      <span>{title}</span>
      <Icon icon={iconName} width={20} height={20} />
    </button>
  );
  if (!showCalDrawer) return button;
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>{button}</DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Schedule a Meeting</DrawerTitle>
        </DrawerHeader>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">
              Schedule a Meeting
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex-1 overflow-hidden px-4 pb-4">
            {/* Cal.com embed */}
            <InlineWidget calLink="md-morshed-alam-hp8ddu/30min" />
          </div>
        </DrawerContent>

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
