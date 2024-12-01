import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="py-8 flex items-center justify-between">
      <Link href="/" className="text-lg font-medium">
        idrissa.xyz
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="/posts" className="text-sm hover:text-primary">
          Posts
        </Link>
        <Link href="/repositories" className="text-sm hover:text-primary">
          Repositories
        </Link>
        <Link href="/principles" className="text-sm hover:text-primary">
          Principles
        </Link>
        <Link href="/resources" className="text-sm hover:text-primary">
          Resources
        </Link>
      </nav>
    </header>
  );
}