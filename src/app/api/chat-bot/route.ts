import { getPersonalInfo } from '@/utils/getPersonalInfo';
import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, TextPart } from 'ai';
import { NextResponse } from 'next/server';

// Initialize OpenAI provider
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure this is set in your env (Vercel or local)
});

// Maximum number of previous messages to include
const MAX_CONTEXT_TURNS = 4;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('Received messages:', messages);

    // Get only the last MAX_CONTEXT_TURNS of conversation
    const recentMessages = messages.slice(-MAX_CONTEXT_TURNS * 2);
    const modelMessages = convertToModelMessages(recentMessages);
    // console.log("Model messages:", modelMessages[modelMessages.length - 1].content);

    // console.log("Model messages length:", modelMessages[modelMessages.length - 1].content);

    // Extract the last user question
    const userQuestion = modelMessages[modelMessages.length - 1].content;
    console.log('User question:', userQuestion);

    const relevantInfo = getPersonalInfo(userQuestion[0] as TextPart);

    // System prompt
    let systemPrompt = `You are a helpful AI assistant for a personal portfolio website.
Your primary goal is to answer questions about the developer’s background, skills, projects, and services in a friendly and informative tone.
However, if the user asks a general question (like about sports, weather, etc.), still answer it accurately and politely.

After answering unrelated questions, add this note:
"💡 By the way, feel free to ask me about my projects, skills, or services too!"

If the question is unclear, politely ask for clarification.
Keep answers short and under 200 tokens.`;

    // Add relevant info if available
    if (relevantInfo.length > 0) {
      systemPrompt += `\n\nReference information about the developer:\n${relevantInfo.join(
        '\n',
      )}`;
    }

    // Generate streaming response using OpenAI
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: modelMessages,
      temperature: 0.7,
      maxOutputTokens: 200, // ✅ updated property name
    });

    console.log('Streaming response initiated with OpenAI');

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      {
        error:
          "I'm sorry, I'm having trouble right now—please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
