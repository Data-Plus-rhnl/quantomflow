import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, companyName, packageSelected, message } = body;

    // 1. Validate required fields
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
        { message: 'Please provide your WhatsApp or phone number.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { message: 'Please provide a brief summary of your project goals.' },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const waPhone = cleanPhone.replace('+', '');
    const waLink = `https://wa.me/${waPhone}`;
    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Dubai',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const leadData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      companyName: companyName?.trim() || 'Not specified',
      packageSelected: packageSelected?.trim() || 'Custom Project',
      message: message.trim(),
      submittedAt: submissionTime,
      location: 'Dubai / UAE Lead',
    };

    console.log('[Dubai Agency Lead Captured]', leadData);

    // 2. Configure SMTP Transport if environment variables exist
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'support@quantumflowit.com';

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; background-color: #0a0e1a; color: #ffffff; padding: 32px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b;">
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #38bdf8; margin: 0 0 6px 0; font-size: 22px;">⚡ Quantum Flow — New Quote Request</h2>
              <span style="color: #94a3b8; font-size: 13px;">Captured via QuantumFlowIT.com · ${submissionTime} (Dubai Time)</span>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; width: 140px; font-size: 14px;"><strong>Client Name:</strong></td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;"><strong>${leadData.name}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 14px;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">${leadData.companyName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 14px;"><strong>Phone / WhatsApp:</strong></td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">
                  <a href="tel:${cleanPhone}" style="color: #38bdf8; text-decoration: none;">${leadData.phone}</a>
                  &nbsp;·&nbsp;
                  <a href="${waLink}" style="color: #25d366; text-decoration: none; font-weight: bold;">[Open WhatsApp Chat ↗]</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 14px;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">
                  <a href="mailto:${leadData.email}" style="color: #38bdf8; text-decoration: none;">${leadData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 14px;"><strong>Selected Package:</strong></td>
                <td style="padding: 10px 0; color: #34d399; font-weight: bold; font-size: 15px;">${leadData.packageSelected}</td>
              </tr>
            </table>

            <div style="background-color: #161d33; padding: 18px; border-radius: 8px; border: 1px solid #232b47; margin-bottom: 24px;">
              <div style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                <strong>Project Goals & Scope Requirements:</strong>
              </div>
              <div style="color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${leadData.message}</div>
            </div>

            <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 20px;">
              <a href="mailto:${leadData.email}?subject=Your Quantum Flow Proposal Request" style="display: inline-block; background-color: #38bdf8; color: #052430; font-weight: bold; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; margin-right: 10px;">Reply via Email</a>
              <a href="${waLink}" style="display: inline-block; background-color: #25d366; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px;">Reply via WhatsApp</a>
            </div>
          </div>
        `;

        const info = await transporter.sendMail({
          from: `"Quantum Flow Leads" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: leadData.email,
          subject: `⚡ New Quote Request: ${leadData.name} (${leadData.packageSelected})`,
          text: `New Quote Request:\n\nName: ${leadData.name}\nCompany: ${leadData.companyName}\nPhone: ${leadData.phone}\nWhatsApp: ${waLink}\nEmail: ${leadData.email}\nPackage: ${leadData.packageSelected}\n\nGoals:\n${leadData.message}`,
          html: htmlContent,
        });

        console.log('[Nodemailer] Lead alert email sent successfully:', info.messageId);
      } catch (mailError) {
        console.error('[Nodemailer Send Error]', mailError);
        // We log the error but still allow the user flow to succeed so the client doesn't see a broken page
      }
    } else {
      console.warn(
        '[Nodemailer Notice] SMTP credentials not set in .env.local (SMTP_HOST, SMTP_USER, SMTP_PASS). Lead logged to console only.'
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your project consultation request has been received. Our team will review and reply within one business day.',
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
