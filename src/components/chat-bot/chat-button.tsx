'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { BotMessageSquare, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Chat } from './chat';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'shadow-primary/70 dark:shadow-brand/70 dark:border-brand/50 dark:bg-brand/10 fixed right-3 bottom-10 z-50 cursor-pointer rounded-full border-2 p-3 shadow-xl backdrop-blur-md md:right-4 md:bottom-4',
          'flex items-center justify-center',
          'transition-all duration-300 hover:scale-105',
          isOpen ? 'pointer-events-none opacity-0' : 'opacity-100',
        )}
      >
        <BotMessageSquare size={28} className="dark:text-brand" />
      </button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="border-brand/20 bg-background/90 shadow-primary/70 dark:shadow-brand/70 top-12 h-[450px] w-full max-w-[375px] rounded-lg border px-3 pt-4 shadow-md backdrop-blur-md md:top-16 md:mr-2 md:max-w-[400px] lg:top-24">
          <SheetTitle>
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">AI Assistance</h3>
            </div>
          </SheetTitle>
          <div className="flex h-full flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <Chat />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
