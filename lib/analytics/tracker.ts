import { VisitorInfo, AnalyticsEvent } from './types';
import {
  getOperatingSystem,
  getBrowserInfo,
  getDeviceType,
  getReferrer,
  getTimeZone,
} from './utils';

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT || '/api/analytics';

export async function trackPageView(path: string): Promise<void> {
  const visitorInfo: VisitorInfo = {
    operatingSystem: getOperatingSystem(),
    browser: getBrowserInfo(),
    deviceType: getDeviceType(),
    referrer: getReferrer(),
    timeZone: getTimeZone(),
    timestamp: new Date().toISOString(),
    path,
  };

  try {
    await fetch(`${ANALYTICS_ENDPOINT}/pageview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(visitorInfo),
    });
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}

export async function trackEvent(eventName: string, eventData: Record<string, any>): Promise<void> {
  const event: AnalyticsEvent = {
    type: eventName,
    data: eventData,
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(`${ANALYTICS_ENDPOINT}/event`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}