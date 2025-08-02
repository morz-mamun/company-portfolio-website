/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import { createReadStream } from 'fs';
import formidable from 'formidable';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseFormData(
  req: Request,
): Promise<{ fields: any; file: any }> {
  const buffers: Uint8Array[] = [];
  const reader = req.body?.getReader();
  if (!reader) throw new Error('No reader');

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) buffers.push(value);
  }

  const formData = Buffer.concat(buffers);

  const uploadDir = '/tmp';
  const tmpFilePath = `${uploadDir}/temp.webm`;
  await fs.writeFile(tmpFilePath, formData);

  return {
    fields: {},
    file: {
      filepath: tmpFilePath,
    },
  };
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetLang = searchParams.get('targetLang') || 'en';

    const { file } = await parseFormData(req);

    const stream = createReadStream(file.filepath);

    // Whisper transcription
    const whisperForm = new FormData();
    whisperForm.append('file', stream as any);
    whisperForm.append('model', 'whisper-1');

    const transcriptionRes = await fetch(
      'https://api.openai.com/v1/audio/transcriptions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
        },
        body: whisperForm,
      },
    );

    const transcriptionData = await transcriptionRes.json();
    const originalText = transcriptionData.text;
    const detectedLang = transcriptionData.language || 'unknown';

    // Translate
    const translationRes = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `Translate this to ${targetLang}. Only translate.`,
            },
            { role: 'user', content: originalText },
          ],
        }),
      },
    );

    const translationData = await translationRes.json();
    const translatedText = translationData.choices?.[0]?.message?.content ?? '';

    return NextResponse.json({ detectedLang, translatedText });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 },
    );
  }
}
