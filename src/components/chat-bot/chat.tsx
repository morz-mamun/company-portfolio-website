'use client';

import { useChat, UIMessage } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatMessage } from './chat-message';
// import { VoiceRecorder } from './voice-recorder';

export function Chat() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat-bot' }),
  });

  console.log(status);

  // Type-safe initial message
  const initialMessage: UIMessage = {
    id: 'welcome-message',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: `Hi! 👋 Ask me about our services or how we can help your business. 💬`,
      },
    ],
  };

  const [allMessages, setAllMessages] = useState<UIMessage[]>([initialMessage]);
  // State for input
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isLoading = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    // Whenever new messages arrive from useChat, merge them with the initial message
    setAllMessages([initialMessage, ...messages]);
  }, [messages]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [allMessages, isLoading, errorMessage]);

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

  return (
    <div className="flex h-full flex-col">
      {/* Messages list */}
      <div className="mx-2 flex-1 overflow-y-auto">
        {allMessages?.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <p className="text-muted-foreground mt-2 animate-pulse text-xs">
            Thinking...
          </p>
        )}
        {errorMessage && (
          <div className="bg-destructive/10 text-destructive my-2 rounded-lg p-2">
            {errorMessage}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input section */}
      <div className="space-y-3 border-t p-4">
        {/* This is for voice input */}
        {/* <div className="flex justify-between">
          <span className="text-muted-foreground text-xs">Voice Input:</span>
          <VoiceRecorder
            onTranscript={handleVoiceTranscript}
            isDisabled={isLoading}
          />
        </div> */}

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
            <Button
              type="submit"
              size="icon"
              disabled={isLoading}
              className="cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
