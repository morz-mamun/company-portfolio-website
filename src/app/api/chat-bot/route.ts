import { getPersonalInfo } from '@/utils/getPersonalInfo';
import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, TextPart } from 'ai';
import { NextResponse } from 'next/server';

// Initialize OpenAI provider
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Maximum number of previous messages to include
const MAX_CONTEXT_TURNS = 4;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Get only the last MAX_CONTEXT_TURNS of conversation
    const recentMessages = messages.slice(-MAX_CONTEXT_TURNS * 2);
    const modelMessages = convertToModelMessages(recentMessages);

    // Extract the last user question
    const userQuestion = modelMessages[modelMessages.length - 1].content;
    const relevantInfo = getPersonalInfo(userQuestion[0] as TextPart);

    // System prompt
    let systemPrompt = `You are a helpful AI assistant for a personal portfolio website.
Your primary goal is to answer questions about the developer’s background, skills, projects, and services in a friendly and informative tone.
However, if the user asks a general question (like about sports, weather, etc.), still answer it accurately and politely.

After answering unrelated questions, add this note:
"💡 By the way, feel free to ask me about my projects, skills, or services too!"

If the question is unclear, politely ask for clarification.
Keep answers short and under 200 tokens.`;

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
      maxOutputTokens: 200,
    });

    // Stream handling with proper error capture
    try {
      const streamResponse = result.toUIMessageStreamResponse();

      // Optional: Listen for streaming events
      const fullStream = result.fullStream;
      for await (const part of fullStream) {
        switch (part.type) {
          case 'error':
          case 'tool-error':
            console.error('AI SDK Stream Error:', part.error);
            break;

          case 'abort':
            console.warn('AI SDK Stream Aborted');
            break;

          default:
            // Other part types (text, metadata, etc.)
            break;
        }
      }

      return streamResponse;
    } catch (streamError) {
      console.error('Stream processing error:', streamError);
      return NextResponse.json(
        {
          error:
            "I'm sorry, there was a problem generating the response. Please try again.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      {
        error:
          "I'm sorry, I'm having trouble right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
