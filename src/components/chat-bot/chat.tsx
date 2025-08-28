'use client';

import { useChat, UIMessage } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatMessage } from './chat-message';
import { VoiceRecorder } from './voice-recorder';

export function Chat() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat-bot' }),
  });

  console.log(status, 'from chat.tsx -->');

  // console.log("error from chat.tsx -->", error);

  // Type-safe initial message
  const initialMessage: UIMessage = {
    id: 'welcome-message',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'Hi! Ask me anything about me, my projects, or my services! You can also use voice input—just select your language and tap the mic!',
      },
    ],
  };

  const [allMessages, setAllMessages] = useState<UIMessage[]>([initialMessage]);
  // State for input
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Whenever new messages arrive from useChat, merge them with the initial message
    setAllMessages([initialMessage, ...messages]);
  }, [messages]);
  console.log('from chat.tsx -->', allMessages);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Handle errors
  useEffect(() => {
    if (error) {
      setErrorMessage("I'm having trouble right now—please try again soon.");
      setTimeout(() => setErrorMessage(null), 5000);
    }
  }, [error]);

  // Handle voice transcript
  const handleVoiceTranscript = (finalTranscript: string) => {
    if (!finalTranscript.trim()) return;
    sendMessage({ text: finalTranscript });
    setInput('');
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput('');
  };

  const isLoading = status === 'submitted' || status === 'streaming';

  return (
    <div className="flex h-full flex-col">
      {/* Messages list */}
      <div className="flex-1 overflow-y-auto pr-1">
        {allMessages?.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {errorMessage && (
          <div className="bg-destructive/10 text-destructive my-2 rounded-lg p-3">
            {errorMessage}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input section */}
      <div className="space-y-3 border-t p-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground text-xs">Voice Input:</span>
          <VoiceRecorder
            onTranscript={handleVoiceTranscript}
            isDisabled={isLoading}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className={cn('', isLoading && 'pointer-events-none opacity-50')}
        >
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message or use voice input..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          {isLoading && (
            <p className="text-muted-foreground mt-2 text-xs">Thinking...</p>
          )}
        </form>
      </div>
    </div>
  );
}
