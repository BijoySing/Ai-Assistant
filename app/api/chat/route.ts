import { NextRequest, NextResponse } from 'next/server';
import { getAIResponse } from '@/app/lib/openai-client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Received request:", body);

    const { messages, systemPrompt } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request. 'messages' must be an array." },
        { status: 400 }
      );
    }

    const response = await getAIResponse(messages, systemPrompt);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
