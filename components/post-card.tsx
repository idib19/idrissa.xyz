import Link from 'next/link';
import type { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/writing/${post.slug}`}
      className="block space-y-2 group"
    >
      <div className="space-y-1">
        <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground">
          {post.date} · {post.readingTime}
        </p>
      </div>
      <p className="text-muted-foreground">
        {post.excerpt}
      </p>
    </Link>
  );
}