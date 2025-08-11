import { IChatMessage } from '@/constants/chat-messages-data';
import { cn } from '@/lib/utils';

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
            'relative rounded-2xl px-2 py-2 shadow-sm md:px-4',
            isOwn
              ? 'bg-[#D3D3D3] text-[#383838]'
              : 'bg-[#1391EB] text-white dark:bg-gray-800 dark:text-gray-100',
            type === 'file' &&
              'border border-dashed border-gray-300 dark:border-gray-600',
          )}
        >
          {type === 'file' ? (
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-lg">📎</span>
              <span className="text-xs md:text-sm">{message}</span>
            </div>
          ) : (
            <p className="text-xs leading-relaxed md:text-sm">{message}</p>
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

export default ChatBubble;
