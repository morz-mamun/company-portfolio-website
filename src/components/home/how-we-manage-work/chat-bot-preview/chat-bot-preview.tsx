'use client';
import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/magicui/animated-list';
import { chatMessagesData, IChatMessage } from '@/constants/chat-messages-data';

let chatMessages = chatMessagesData;

// Duplicate messages to create a longer chat
chatMessages = Array.from({ length: 20 }, () => chatMessages).flat();

const ChatBubble = ({
  message,
  sender,
  avatar,
  time,
  isOwn,
  type,
}: IChatMessage) => {
  return (
    <div
      className={cn(
        'flex w-full gap-3',
        isOwn ? 'justify-end' : 'justify-start',
      )}
    >
      {!isOwn && (
        <div className="flex-shrink-0">
          <div className="flex size-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="text-sm">{avatar}</span>
          </div>
        </div>
      )}

      <div
        className={cn(
          'flex max-w-[60%] flex-col gap-1',
          isOwn ? 'items-end' : 'items-start',
        )}
      >
        {!isOwn && (
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            {sender}
          </span>
        )}

        <div
          className={cn(
            'relative rounded-2xl px-4 py-2 shadow-sm',
            isOwn
              ? 'bg-[#D3D3D3] text-[#383838]'
              : 'bg-[#1391EB] text-white dark:bg-gray-800 dark:text-gray-100',
            type === 'file' &&
              'border border-dashed border-gray-300 dark:border-gray-600',
          )}
        >
          {type === 'file' ? (
            <div className="flex items-center gap-2">
              <span className="text-lg">📎</span>
              <span className="text-sm">{message}</span>
            </div>
          ) : (
            <p className="text-sm leading-relaxed">{message}</p>
          )}

          {/* Chat bubble tail */}
          <div
            className={cn(
              'absolute top-2 h-0 w-0',
              isOwn
                ? 'right-[-6px] border-t-[6px] border-l-[6px] border-t-transparent border-l-blue-500'
                : 'left-[-6px] border-t-[6px] border-r-[6px] border-t-transparent border-r-gray-100 dark:border-r-gray-800',
            )}
          />
        </div>

        <span
          className={cn(
            'text-xs text-gray-500 dark:text-gray-400',
            isOwn ? 'text-right' : 'text-left',
          )}
        >
          {time}
        </span>
      </div>

      {isOwn && (
        <div className="flex-shrink-0">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <span className="text-sm">{avatar}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ChatBotPreview() {
  return (
    <div className="group h-[500px] cursor-pointer overflow-hidden border border-t-0 border-l-0">
      <div className="group relative flex h-[374px] w-full flex-col overflow-hidden p-4">
        <AnimatedList delay={1500}>
          {chatMessages.map((item, idx) => (
            <ChatBubble {...item} key={`${item.id}-${idx}`} />
          ))}
        </AnimatedList>

        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      </div>
      {/* bottom content */}
      <div className="mx-2 max-w-[544px] p-2 transition-transform duration-300 group-hover:-translate-y-8">
        <h4 className="font-space-grotesk text-[24px] font-bold">
          Collaborate our clients with AI Chatbot
        </h4>
        <p className="text-brand">
          AI Chatbot is a powerful tool that can help you automate your business
          processes, improve customer service, and save you time and money.
        </p>
      </div>
    </div>
  );
}
