/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import { createReadStream } from 'fs';
import fs from 'fs/promises';
import { OpenAI } from 'openai';
import { randomUUID } from 'crypto';

export const runtime = 'edge'; // or 'nodejs' if using fs

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  const buffer = Buffer.from(await file.arrayBuffer());
  const tempFilePath = `/tmp/${randomUUID()}.webm`;
  await fs.writeFile(tempFilePath, buffer);

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: createReadStream(tempFilePath) as any,
      model: 'whisper-1',
      response_format: 'json',
      language: 'auto', // auto-detect spoken language
      temperature: 0,
    });

    // This gives translated prompt in English (for GPT)
    const prompt = transcription.text;

    return NextResponse.json({
      prompt, // for GPT input
      transcript: prompt, // original spoken text (you may enhance later)
    });
  } catch (error) {
    console.error('Whisper error:', error);
    return NextResponse.json(
      { error: 'Failed to transcribe' },
      { status: 500 },
    );
  } finally {
    await fs.unlink(tempFilePath); // Clean up temp file
  }
}
