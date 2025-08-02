/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest } from 'next/server';
import { tmpdir } from 'os';
import path from 'path';

import { createReadStream, unlinkSync } from 'fs';
import { writeFile } from 'fs/promises';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const targetLang = (formData.get('targetLang') as string) || 'en';

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
      });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(tmpdir(), `upload-${Date.now()}.webm`);
    await writeFile(filePath, buffer);

    // Whisper transcription
    const whisperRes = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: (() => {
          const form = new FormData();
          form.append('file', createReadStream(filePath) as any);
          form.append('model', 'whisper-1');
          return form;
        })(),
      },
    );

    const whisperData = await whisperRes.json();
    const originalText = whisperData.text;
    const detectedLang = whisperData.language || 'unknown';

    await unlinkSync(filePath); // Cleanup

    // Translate using GPT
    const translationRes = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Translate the following to ${targetLang} only. Do not explain.`,
            },
            {
              role: 'user',
              content: originalText,
            },
          ],
        }),
      },
    );

    const translationData = await translationRes.json();
    const translatedText = translationData.choices?.[0]?.message?.content ?? '';

    return new Response(JSON.stringify({ detectedLang, translatedText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  }
}
