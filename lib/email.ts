import nodemailer from 'nodemailer';
import type { VisitorInfo, AnalyticsEvent } from './analytics/types';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendAnalyticsEmail(data: VisitorInfo | AnalyticsEvent, type: 'pageview' | 'event') {
  const subject = type === 'pageview' ? 'New Page View' : 'New Analytics Event';
  
  const htmlContent = `
    <h2>${subject}</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ANALYTICS_EMAIL_RECIPIENT,
    subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Analytics email sent successfully');
  } catch (error) {
    console.error('Failed to send analytics email:', error);
  }
}