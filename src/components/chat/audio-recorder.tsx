'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';

interface AudioRecorderProps {
  onTranscribe: (text: string) => void;
  onRecordingChange: (isRecording: boolean) => void;
  disabled?: boolean;
}

export default function AudioRecorder({
  onTranscribe,
  onRecordingChange,
  disabled,
}: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/webm',
        });
        onRecordingChange(false);
        setIsRecording(false);
        toast('Transcribing audio...', {
          description: 'Please wait while we process your voice.',
        });
        try {
          const formData = new FormData();
          formData.append('file', audioBlob, 'audio.webm');

          const response = await fetch('/api/whisper', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          if (data.prompt) {
            onTranscribe(data.prompt);
            toast.success('Transcription successful!', {
              description: 'Your voice has been converted to text.',
            });
          } else {
            toast('Transcription failed', {
              description:
                'No text was returned from the transcription service.',
            });
          }
        } catch (error) {
          console.error('Error transcribing audio:', error);
          toast('Transcription error', {
            description: 'Failed to transcribe audio. Please try again.',
          });
        } finally {
          // Stop all tracks in the stream to release microphone
          stream.getTracks().forEach((track) => track.stop());
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      onRecordingChange(true);
      toast('Recording started', {
        description: 'Speak now...',
      });
    } catch (err) {
      console.error('Error accessing microphone:', err);
      toast('Microphone access denied', {
        description: 'Please allow microphone access to use voice input.',
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div className="flex w-full justify-center">
      {!isRecording ? (
        <Button onClick={startRecording} disabled={disabled} className="w-full">
          <Mic className="mr-2 h-5 w-5" />
          Start Voice Input
        </Button>
      ) : (
        <Button
          onClick={stopRecording}
          disabled={disabled}
          variant="destructive"
          className="w-full"
        >
          <StopCircle className="mr-2 h-5 w-5" />
          Stop Recording
        </Button>
      )}
    </div>
  );
}
