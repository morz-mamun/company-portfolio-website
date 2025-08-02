'use client';

import { useRef, useState } from 'react';

export default function Chat() {
  const [recording, setRecording] = useState(false);
  const [chat, setChat] = useState<{ role: string; content: string }[]>([]);
  const [textInput, setTextInput] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    audioChunks.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        audioChunks.current.push(e.data);
      }
    };

    recorder.onstop = async () => {
      const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('file', blob, 'audio.webm');

      const whisperRes = await fetch('/api/whisper', {
        method: 'POST',
        body: formData,
      });

      const whisperData = await whisperRes.json();
      const userSpoken = whisperData.transcript || '[unknown]';
      const prompt = whisperData.prompt;

      handleSendMessage(userSpoken, prompt);
    };

    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleSendMessage = async (userInput: string, prompt: string) => {
    setChat((prev) => [
      ...prev,
      { role: 'user', content: userInput },
      { role: 'assistant', content: '' },
    ]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: { 'Content-Type': 'application/json' },
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let reply = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer
        .split('\n')
        .filter((line) => line.trim().startsWith('data:'));
      buffer = '';

      for (const line of lines) {
        const jsonStr = line.replace(/^data:\s*/, '');
        if (jsonStr === '[DONE]') break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            reply += content;
            setChat((prev) => [
              ...prev.slice(0, -1),
              { role: 'assistant', content: reply },
            ]);
          }
        } catch (err) {
          console.error('Stream parse error:', err);
        }
      }
    }
  };

  // Handle text input submit button
  const handleTextSubmit = async () => {
    if (!textInput.trim()) return;
    await handleSendMessage(textInput, textInput);
    setTextInput('');
  };

  return (
    <div className="mx-auto max-w-xl space-y-4 py-8">
      <div className="space-y-2">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={msg.role === 'user' ? 'text-blue-600' : 'text-green-600'}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong>{' '}
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-grow rounded border px-3 py-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleTextSubmit();
            }
          }}
        />
        <button
          onClick={handleTextSubmit}
          className="rounded bg-blue-500 px-4 py-2 text-white"
          disabled={!textInput.trim()}
        >
          Send
        </button>
      </div>

      <div>
        {!recording ? (
          <button
            onClick={startRecording}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Stop Recording
          </button>
        )}
      </div>
    </div>
  );
}
