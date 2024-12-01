import { BackButton } from '@/components/back-button';

export default function PrinciplesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <nav className="py-8">
        <BackButton href="/" label="Back to home" />
      </nav>
      
      <h1 className="text-3xl font-medium mb-4">Principles</h1>
      <p className="text-muted-foreground mb-12">
        Core software engineering principles I follow in my work.
      </p>

      <div className="space-y-16">
        <ol className="list-none space-y-12">
          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">01</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Keep It Simple</p>
                <p className="text-muted-foreground">Simple code is easier to understand, maintain, and debug.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">02</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Write Clean Code</p>
                <p className="text-muted-foreground">Clear, readable code saves time and reduces errors.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">03</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Single Responsibility</p>
                <p className="text-muted-foreground">Each component should do one thing and do it well.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">04</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Test Early, Test Often</p>
                <p className="text-muted-foreground">Comprehensive testing prevents bugs and ensures reliability.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">05</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Iterate to Perfection</p>
                <p className="text-muted-foreground">Start with working code, then improve and optimize.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">06</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Learn from Others</p>
                <p className="text-muted-foreground">Seek feedback and learn from experienced developers.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">07</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Use the Right Tools</p>
                <p className="text-muted-foreground">Choose technologies based on project requirements, not trends.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">08</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Embrace Mistakes</p>
                <p className="text-muted-foreground">Learn from failures and use them to improve.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">09</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Document Well</p>
                <p className="text-muted-foreground">Good documentation makes code more maintainable.</p>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex items-baseline gap-6">
              <span className="text-muted-foreground font-mono text-sm">10</span>
              <div className="space-y-2">
                <p className="text-lg font-medium">Never Stop Learning</p>
                <p className="text-muted-foreground">Stay current with new technologies and best practices.</p>
              </div>
            </div>
          </li>
        </ol>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>Idrissa © 2024</p>
        </footer>
      </div>
    </div>
  );
}