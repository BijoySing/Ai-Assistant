// app/api/messages/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

// GET all messages
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ai-agent');
    const messages = await db.collection('messages').find().sort({ timestamp: 1 }).toArray();

    return NextResponse.json(messages);
  } catch (error) {
    console.error('❌ GET /api/messages error:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

// POST new message
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('ai-agent');

    const newMessage = {
      ...body,
      timestamp: new Date(),
    };

    await db.collection('messages').insertOne(newMessage);

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('❌ POST /api/messages error:', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
