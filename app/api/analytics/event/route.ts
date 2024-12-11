import { NextResponse } from 'next/server';
import type { AnalyticsEvent } from '@/lib/analytics/types';
import { sendAnalyticsEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const event: AnalyticsEvent = await request.json();
    
    // Send email notification
    await sendAnalyticsEmail(event, 'event');
    
    console.log('Event:', event);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics Error:', error);
    return NextResponse.json({ error: 'Failed to track event' }, { status: 500 });
  }
}