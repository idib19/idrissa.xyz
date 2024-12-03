import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/back-button';
import { ExternalLink, MessageSquare, Bot, Clock, Wrench, Calendar, MessageCircle } from 'lucide-react';

export default function AiSmsAgentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <nav className="py-8">
        <BackButton href="/" label="Back to home" />
      </nav>

      <main className="space-y-16 pb-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold">AI SMS Agent</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An intelligent SMS-based appointment booking system powered by Anthropic's AI and Twilio
          </p>
        </section>

        {/* Video Demo Section */}
        <section className="aspect-video bg-muted rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/r1H2-aTNdBU"
            title="AI SMS Agent Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Button size="lg" asChild>
            <a href="https://mk-form.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Try it out <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </section>

        {/* Use Case Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Phone Repair Focus</h3>
                  <p className="text-muted-foreground">
                    Our phone repair store team needed to focus on handling repairs and assisting walk-in customers without constant interruption from SMS inquiries.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Booking Management</h3>
                  <p className="text-muted-foreground">
                    Managing appointment requests via SMS and E-mail was becoming time-consuming and often led to delayed responses during busy repair hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Customer Communication</h3>
                  <p className="text-muted-foreground">
                    We needed a solution that could handle customer inquiries professionally and consistently, even during peak hours or after business hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">The Solution</h3>
              <p className="text-muted-foreground mb-4">
                The AI SMS Agent was developed to automate customer communication while maintaining a personal touch. It handles appointment scheduling, answers common questions, and provides instant responses 24/7, allowing our team to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Focus entirely on in-store repairs and customer service
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Eliminate response delays for booking requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Provide consistent, professional communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Improve customer satisfaction with instant responses
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-medium">Natural Conversations</h3>
            <p className="text-muted-foreground">
              Engage in human-like conversations powered by Anthropic's advanced language model
            </p>
          </div>
          <div className="space-y-4">
            <Bot className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-medium">Intelligent Booking</h3>
            <p className="text-muted-foreground">
              Smart appointment scheduling that understands context and handles complex requests
            </p>
          </div>
          <div className="space-y-4">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-medium">24/7 Availability</h3>
            <p className="text-muted-foreground">
              Always available to handle booking requests and inquiries through SMS
            </p>
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Technical Overview</h2>
          <div className="prose prose-neutral max-w-none">
            <p>
              The AI SMS Agent is built using a modern tech stack that combines the power of artificial intelligence with reliable messaging infrastructure:
            </p>
            <ul>
              <li>Node.js backend for robust server-side processing</li>
              <li>Anthropic's AI for natural language understanding and generation</li>
              <li>Twilio API for reliable SMS communication</li>
              <li>MongoDB for efficient data storage and retrieval</li>
              <li>Serverless architecture for scalability and cost-effectiveness</li>
            </ul>
          </div>
        </section>

        {/* View More Projects */}
        <section className="text-center pt-8">
          <Button variant="outline" asChild>
            <Link href="/repositories">View more projects</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}