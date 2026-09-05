import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Qara, an intelligent AI assistant for Quantum Flow — a premium web design and development agency based in Dubai, UAE.

Your role is to help potential clients understand what Quantum Flow does, answer questions about services, pricing, and process, and guide interested leads toward booking a free consultation.

About Quantum Flow:
- Dubai-based boutique web agency specialising in high-performance websites and web apps
- Clients include restaurants, clinics, luxury e-commerce brands, salons, corporate firms, childcare centres, and personal brands
- Core services: Custom website design & development, Online booking systems, E-commerce stores, WhatsApp & payment integrations, Local SEO, Ongoing maintenance
- Tech stack: Next.js, React, TypeScript, Node.js, Vercel Edge, Cloudflare
- Packages start from AED 3,500 for a Starter site up to enterprise/custom pricing
- Turnaround: 7–21 days depending on package
- All projects include mobile-first design, SSL, Google PageSpeed 95+ guarantee
- Contact: Free consultation available via the website contact form

Your personality:
- Warm, confident, and concise — like a knowledgeable senior team member
- Never make up prices or promises you are not sure about — say "our team will confirm exact pricing in your free consultation"
- Always end conversations that show buying intent by suggesting the free consultation
- Keep replies short: 2–4 sentences max unless the user asks a detailed question
- Never mention competitors by name
- You are NOT a general-purpose AI — if asked unrelated questions, politely redirect to Quantum Flow topics

IMPORTANT FORMATTING RULES:
- Reply ONLY with your final answer — no reasoning steps, no "Reasoning:" sections, no "Answer:" labels
- Do not show your thinking process — just respond directly and naturally
- Never use headers like **Reasoning** or **Answer** in your output`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid messages payload.' }, { status: 400 });
    }

    // Cap history to last 20 messages to avoid token overflow
    const history = messages.slice(-20).map((m: { role: string; content: string }) => ({
      role: m.role as 'user' | 'assistant',
      content: String(m.content),
    }));

    const stream = await groq.chat.completions.create({
      model: 'groq/compound',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
      temperature: 0.6,
      max_tokens: 400,
      stream: true,
    });

    // Return a ReadableStream so the client can render tokens as they arrive
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const token = chunk.choices[0]?.delta?.content ?? '';
            if (token) {
              controller.enqueue(encoder.encode(token));
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (err) {
    console.error('[Chat API Error]', err);
    return NextResponse.json(
      { error: 'Failed to get a response. Please try again.' },
      { status: 500 }
    );
  }
}
