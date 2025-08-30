'use client';

import { useState } from 'react';
import { BotMessageSquare, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Chat } from './chat';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          'fixed right-8 bottom-5 z-50 h-[500px] w-[400px] transition-all duration-300 ease-in-out',
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <Card className="border-border/50 flex h-full flex-col p-0 shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="border-border/50 flex items-center justify-between border-b px-2 py-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">AI Assistance</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 cursor-pointer p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Body */}
          <div className="flex h-full flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <Chat />
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Button */}
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

      {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
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
        </SheetTrigger>
        <SheetContent className="border-brand/20 bg-background/90 shadow-primary/70 dark:shadow-brand/70 w-full max-w-[375px] border px-3 pt-4 shadow-md backdrop-blur-md md:max-w-[400px]">
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
      </Sheet> */}
    </>
  );
}
