import { NextResponse } from 'next/server';
import type { VisitorInfo } from '@/lib/analytics/types';
import { sendAnalyticsEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const visitorInfo: VisitorInfo = await request.json();
    
    // Send email notification
    await sendAnalyticsEmail(visitorInfo, 'pageview');
    
    console.log('Page View:', visitorInfo);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics Error:', error);
    return NextResponse.json({ error: 'Failed to track page view' }, { status: 500 });
  }
}