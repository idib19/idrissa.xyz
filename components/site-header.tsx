import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="py-8 flex items-center justify-between">
      <Link href="/" className="text-lg font-medium">
        idrissa.xyz
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
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

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link 
              href="/posts" 
              className="text-sm hover:text-primary transition-colors"
            >
              Posts
            </Link>
            <Link 
              href="/repositories" 
              className="text-sm hover:text-primary transition-colors"
            >
              Repositories
            </Link>
            <Link 
              href="/principles" 
              className="text-sm hover:text-primary transition-colors"
            >
              Principles
            </Link>
            <Link 
              href="/resources" 
              className="text-sm hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}