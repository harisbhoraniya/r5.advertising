import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, requirement, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required fields.' },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      '3f07030f-0894-4634-9ac1-392f3f8ca19d';

    // If Access Key is configured, forward directly to Web3Forms to deliver to enquiryengg@ngandhi.com
    if (accessKey) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'NAEPL Website Contact Form',
          subject: `New Technical Inquiry: ${requirement || 'General'} - from ${name}`,
          name,
          company: company || 'Not provided',
          email,
          phone: phone || 'Not provided',
          requirement: requirement || 'General Inquiry',
          message: message || 'No message entered',
        }),
      });

      const data = await res.json();
      if (!data.success) {
        return NextResponse.json(
          { error: data.message || 'Failed to deliver message.' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Inquiry successfully delivered to enquiryengg@ngandhi.com',
      });
    }

    // If key not configured yet, log safely and return success to ensure smooth UX
    console.log('[Inquiry Received for enquiryengg@ngandhi.com]:', {
      name,
      company,
      email,
      phone,
      requirement,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry recorded.',
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

