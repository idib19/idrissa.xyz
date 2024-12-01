import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="mb-16 flex items-center justify-between">
      <Link href="/" className="text-lg font-semibold hover:text-primary">
        yourname.xyz
      </Link>
      <div className="flex items-center space-x-8">
        <Link href="/writing" className="text-sm hover:text-primary">
          Writing
        </Link>
        <Link href="/projects" className="text-sm hover:text-primary">
          Projects
        </Link>
      </div>
    </nav>
  );
}