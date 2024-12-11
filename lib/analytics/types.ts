export interface VisitorInfo {
    operatingSystem: string;
    browser: string;
    deviceType: string;
    referrer: string;
    timeZone: string;
    timestamp: string;
    path: string;
  }
  
  export interface AnalyticsEvent {
    type: string;
    data: Record<string, any>;
    timestamp: string;
  }

  