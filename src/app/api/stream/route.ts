import { NextRequest } from 'next/server';

export const runtime = 'edge'; // Optional for faster streaming on Vercel Edge

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  //   const customPrompt = ` ${prompt}, please make short answers.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    }),
  });

  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();

  const pump = async () => {
    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;
      await writer.write(decoder.decode(value));
    }
    writer.close();
  };

  pump();

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Transfer-Encoding': 'chunked',
    },
  });
}
