import { getCompanyInfo } from '@/utils/getCompanyInfo';
// import { createOpenAI } from '@ai-sdk/openai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { google } from '@ai-sdk/google';
import { convertToModelMessages, streamText, TextPart } from 'ai';
import { NextResponse } from 'next/server';

// Initialize OpenAI provider
// const openai = createOpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// Initialize OpenRouter provider
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
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
    const relevantInfo = getCompanyInfo(userQuestion[0] as TextPart);

    // Generate system prompt
    let systemPrompt = `You are a professional AI assistant for the Trust Global Communication website.
Your goal is to answer questions about the company, services, solutions, industries, clients, and contact information in a friendly, professional, and informative tone.

Guidelines:
- Keep answers concise (under 200 tokens) and informative.
- When mentioning a service, suggest its link with emoji. Example:
  - AI Automation: [Learn more](/ai-automation) 🤖
  - Web & Software Development: [Learn more](/web-software-development) 💻
- Include emojis/icons for services and industries.
- For queries about specific services, automatically include a personalized CTA:
  "📞 Interested in <Service Name>? Schedule a consultation <emoji> or email us at info@trustglobalcommunication.com to discuss your project."
- For general services, projects, or contact queries, include a CTA:
  "📞 Schedule a consultation or email us at info@trustglobalcommunication.com to discuss your project or business needs."
- If the question is unrelated, answer politely and accurately.
- After unrelated answers, add:
  "💡 By the way, feel free to ask me about our services, solutions, or how we can help your business!"

If the question is unclear, politely ask for clarification.`;

    if (relevantInfo.length > 0) {
      systemPrompt += `\n\nReference information about the company:\n${relevantInfo.join('\n')}`;
    }

    // Generate streaming response using OpenAI
    const result = streamText({
      // model: openai('gpt-4o-mini'),
      // model: google("gemini-2.0-flash"),
      model: openrouter.chat('google/gemini-2.0-flash-001'),
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
