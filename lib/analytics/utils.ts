export function getOperatingSystem(): string {
    if (typeof window === 'undefined') return 'Unknown';
  
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();
  
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'MacOS';
    if (platform.includes('linux')) return 'Linux';
    if (/android/.test(userAgent)) return 'Android';
    if (/iphone|ipad|ipod/.test(userAgent)) return 'iOS';
  
    return 'Unknown';
  }
  
  export function getBrowserInfo(): string {
    if (typeof window === 'undefined') return 'Unknown';
  
    const userAgent = navigator.userAgent.toLowerCase();
  
    if (userAgent.includes('chrome') && !userAgent.includes('edge')) return 'Chrome';
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) return 'Safari';
    if (userAgent.includes('firefox')) return 'Firefox';
    if (userAgent.includes('edge')) return 'Edge';
    if (userAgent.includes('opera') || userAgent.includes('opr')) return 'Opera';
  
    return 'Unknown';
  }
  
  export function getDeviceType(): string {
    if (typeof window === 'undefined') return 'Unknown';
  
    const userAgent = navigator.userAgent.toLowerCase();
  
    if (/mobile/.test(userAgent)) return 'Mobile';
    if (/tablet/.test(userAgent)) return 'Tablet';
  
    return 'Desktop';
  }
  
  export function getReferrer(): string {
    if (typeof window === 'undefined') return 'Unknown';
    return document.referrer || 'Direct Visit';
  }
  
  export function getTimeZone(): string {
    if (typeof window === 'undefined') return 'Unknown';
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }