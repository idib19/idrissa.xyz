import { Mail, Github, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-8">
      <a
        href="mailto:idiberthe19@gmail.com"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/idib19"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/idrissaberthe19/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}