import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, companyName, projectType, packageSelected, budgetRange, message } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { message: 'Please provide your name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim() === '') {
      return NextResponse.json(
        { message: 'Please provide your WhatsApp or phone number for proposal dispatch.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { message: 'Please provide a brief summary of your project goals.' },
        { status: 400 }
      );
    }

    console.log('[Dubai Agency Lead Captured]', {
      name,
      email,
      phone,
      companyName: companyName || 'Not specified',
      projectType: projectType || 'Standard',
      packageSelected: packageSelected || 'Custom',
      budgetRange: budgetRange || 'Flexible',
      message,
      submittedAt: new Date().toISOString(),
      location: 'Dubai / UAE Lead',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your project consultation request has been received. Our Dubai senior engineer will reply within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred while submitting your request.' },
      { status: 500 }
    );
  }
}
