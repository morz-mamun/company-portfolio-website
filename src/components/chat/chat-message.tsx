import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div
      className={cn(
        'mb-4 flex items-start gap-3',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'max-w-[70%] rounded-lg p-3',
          isUser
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50',
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{content}</p>
      </div>
      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
