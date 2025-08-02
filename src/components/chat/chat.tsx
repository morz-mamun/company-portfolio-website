'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Send } from 'lucide-react';
import ChatMessage from './chat-message';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import AudioRecorder from './audio-recorder';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: text }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessageContent = '';
      const newAssistantMessage: Message = { role: 'assistant', content: '' };

      setMessages((prev) => [...prev, newAssistantMessage]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        // Server-Sent Events (SSE) format: data: {json_payload}\n\n
        // We need to parse each line that starts with 'data: '
        chunk.split('\n\n').forEach((event) => {
          if (event.startsWith('data: ')) {
            const data = event.substring(6);
            if (data === '[DONE]') {
              return;
            }
            try {
              const parsed = JSON.parse(data);
              if (
                parsed.choices &&
                parsed.choices[0] &&
                parsed.choices[0].delta &&
                parsed.choices[0].delta.content
              ) {
                assistantMessageContent += parsed.choices[0].delta.content;
                setMessages((prev) => {
                  const lastMessage = prev[prev.length - 1];
                  if (lastMessage && lastMessage.role === 'assistant') {
                    return [
                      ...prev.slice(0, -1),
                      { ...lastMessage, content: assistantMessageContent },
                    ];
                  }
                  return prev;
                });
              }
            } catch (e) {
              console.error('Failed to parse SSE chunk:', e, 'Chunk:', data);
            }
          }
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAudioTranscription = async (transcribedText: string) => {
    if (transcribedText) {
      await handleSendMessage(transcribedText);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <Card className="flex h-[80vh] w-full max-w-2xl flex-col">
        <CardHeader>
          <CardTitle className="text-center">AI Chat Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full p-4" ref={chatContainerRef}>
            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400">
                Start a conversation by typing or speaking!
              </div>
            ) : (
              messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  role={msg.role}
                  content={msg.content}
                />
              ))
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 border-t p-4">
          <div className="flex w-full gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isLoading) {
                  handleSendMessage(input);
                }
              }}
              disabled={isLoading || isRecording}
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage(input)}
              disabled={isLoading || isRecording}
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          <AudioRecorder
            onTranscribe={handleAudioTranscription}
            onRecordingChange={setIsRecording}
            disabled={isLoading}
          />
        </CardFooter>
      </Card>
    </main>
  );
}
