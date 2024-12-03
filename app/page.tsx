import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/components/social-links';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-grow flex items-center justify-center">
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-medium">
            Hi, I'm <span className="bg-black text-white px-3 py-1">Idrissa</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I'm a software engineer focused on building products that matter.
            Currently working on interesting projects and writing about
            technology, engineering, and personal growth.
          </p>
          <SocialLinks />
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="default" asChild>
              <a href="mailto:idiberthe19@gmail.com">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/ai-sms-agent">View my latest project</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center text-base justify-center space-x-3">
          <span>Idrissa</span>
          <span>Berthé</span>
          <span className="text-muted-foreground">|</span>
          <a href="mailto:idiberthe19@gmail.com" className="hover:text-foreground transition-colors">
            idiberthe19@gmail.com
          </a>
        </div>
        <div className="flex items-center text-sm justify-center space-x-3 mt-4">
          <span className="border-b border-muted-foreground">Telus</span>
          <span>and</span>
          <span className="border-b border-muted-foreground">Ikasugu</span>
        </div>
      </footer>
    </div>
  );
}