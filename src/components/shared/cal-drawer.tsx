import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import InlineWidget from '@calcom/embed-react';

export default function CalDrawer({ button }: { button: React.ReactNode }) {
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
