import type { UIMessage } from '@ai-sdk/react';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

export function ChatMessage({ message }: { message: UIMessage }) {
  console.log('showing message from ChatMessage -->', message);

  // UIMessage parts contain structured content
  const textContent =
    message.parts
      ?.map((part) => (part.type === 'text' ? part.text : ''))
      .join(' ') ?? '';

  return (
    <div
      className={cn(
        'mb-4 flex max-w-[85%] gap-3 rounded-lg p-3',
        message.role === 'user'
          ? 'bg-primary text-primary-foreground ml-auto'
          : 'bg-muted mr-auto',
      )}
    >
      {message.role === 'assistant' && (
        <div className="mt-1 flex-shrink-0">
          <div className="bg-primary/20 flex h-6 w-6 items-center justify-center rounded-full">
            <Bot className="h-3 w-3" />
          </div>
        </div>
      )}
      <div className="flex-1">
        <div className="text-sm whitespace-pre-wrap">{textContent}</div>
      </div>
      {message.role === 'user' && (
        <div className="mt-1 flex-shrink-0">
          <div className="bg-primary-foreground/20 flex h-6 w-6 items-center justify-center rounded-full">
            <User className="h-3 w-3" />
          </div>
        </div>
      )}
    </div>
  );
}
