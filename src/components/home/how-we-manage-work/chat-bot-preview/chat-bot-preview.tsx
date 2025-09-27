'use client';
import { AnimatedList } from '@/components/magicui/animated-list';
import { chatMessagesData } from '@/constants/chat-messages-data';
import ChatBubble from './chat-bubble';

let chatMessages = chatMessagesData;

// Duplicate messages to create a longer chat
chatMessages = Array.from({ length: 20 }, () => chatMessages).flat();

export default function ChatBotPreview() {
  return (
    <div className="group h-[500px] cursor-pointer overflow-hidden border border-t-0 border-r-0 border-l-0 md:border-r">
      <div className="group relative flex h-[374px] w-full flex-col overflow-hidden p-3 md:h-[330px] lg:h-[374px] lg:p-4">
        <AnimatedList delay={1500}>
          {chatMessages.map((item, idx) => (
            <ChatBubble {...item} key={`${item.id}-${idx}`} />
          ))}
        </AnimatedList>

        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      </div>
      {/* bottom content */}
      <div className="max-w-[544px] space-y-2 p-2 transition-transform duration-300 group-hover:-translate-y-8 lg:mx-2">
        <h3 className="font-inter text-lg font-semibold md:text-xl lg:text-2xl">
          Collaborate Seamlessly with AI Chatbots
        </h3>
        <p className="text-brand dark:text-primary text-xs md:text-sm lg:text-base">
          Our AI chatbots enhance collaboration by automating routine tasks,
          improving customer interactions, and saving time.
        </p>
      </div>
    </div>
  );
}
