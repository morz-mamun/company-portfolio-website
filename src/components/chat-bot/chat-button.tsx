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
          'fixed right-8 bottom-5 z-50 h-[calc(100vh-5rem)] w-[400px] transition-all duration-300 ease-in-out',
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <Card className="bg-background flex h-full flex-col border p-0 shadow-md shadow-blue-400">
          {/* Header */}
          <div className="border-border/50 flex items-center justify-between border-b px-2 py-3">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-inter text-lg font-medium">
                TGCX Ai Assistant
              </h3>
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
          'fixed right-3 bottom-10 z-50 cursor-pointer rounded-full bg-gradient-to-b from-[#0908C3] to-[#0C34E9] p-3 shadow-lg shadow-blue-400 md:right-4 md:bottom-4',
          'flex items-center justify-center',
          'transition-all duration-300 hover:scale-105',
          isOpen ? 'pointer-events-none opacity-0' : 'opacity-100',
        )}
      >
        <BotMessageSquare size={28} className="text-white" />
      </button>
    </>
  );
}
