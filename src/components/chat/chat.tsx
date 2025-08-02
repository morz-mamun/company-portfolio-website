'use client';

import { useEffect, useRef, useState } from 'react';

export default function VoiceChat() {
  const [isRecording, setIsRecording] = useState(false);
  const [chat, setChat] = useState<{ role: string; content: string }[]>([]);
  const [selectedLang, setSelectedLang] = useState('en');
  const [textInput, setTextInput] = useState('');
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) audioChunks.current.push(event.data);
    };

    mediaRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append(
        'file',
        new File([audioBlob], 'speech.webm', { type: 'audio/webm' }),
      );

      const res = await fetch(`/api/whisper?targetLang=${selectedLang}`, {
        method: 'POST',
        body: audioBlob,
      });

      const { detectedLang, translatedText } = await res.json();
      setChat((prev) => [
        ...prev,
        { role: 'user', content: `[${detectedLang}] ${translatedText}` },
        { role: 'assistant', content: '' },
      ]);

      await streamToChatResponse(translatedText);
    };

    mediaRecorder.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  };

  const handleSendText = async () => {
    const input = textInput.trim();
    if (!input) return;
    setChat((prev) => [
      ...prev,
      { role: 'user', content: input },
      { role: 'assistant', content: '' },
    ]);
    setTextInput('');
    await streamToChatResponse(input);
  };

  const streamToChatResponse = async (input: string) => {
    const res = await fetch('/api/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder('utf-8');
    let reply = '';

    let buffer = '';

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n').filter((line) => line.trim() !== '');
      buffer = '';

      for (const line of lines) {
        if (line.startsWith('data:')) {
          const json = line.replace(/^data:\s*/, '');
          if (json === '[DONE]') break;

          try {
            const parsed = JSON.parse(json);
            const content = parsed?.choices?.[0]?.delta?.content;
            if (content) {
              reply += content;
              setChat((prev) => [
                ...prev.slice(0, -1),
                { role: 'assistant', content: reply },
              ]);
            }
          } catch (e) {
            console.error('Failed to parse stream chunk:', e);
          }
        }
      }
    }
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="mb-4 text-xl font-bold">
        🌍 Multilingual Voice/Text Chat
      </h1>

      <div className="mb-4 flex gap-2">
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="en">English</option>
          <option value="bn">Bengali</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
        </select>

        <button
          onClick={startRecording}
          disabled={isRecording}
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          🎙 Start
        </button>
        <button
          onClick={stopRecording}
          disabled={!isRecording}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          ⏹ Stop
        </button>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full border p-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendText}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Send
        </button>
      </div>

      <div className="space-y-2">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`rounded p-2 ${
              msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
            }`}
          >
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}
