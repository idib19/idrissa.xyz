import { BackButton } from '@/components/back-button';
import { posts } from '@/lib/posts';
import Link from 'next/link';

// Define a type for a single post
type Post = {
  date: string;
  slug: string;
  title: string;
  // Add other properties of a post if necessary
};

// Update the function to use the Post type
function groupPostsByYear(posts: Post[]) {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, Post[]>);
}

export default function PostsPage() {
  const postsByYear = groupPostsByYear(posts);
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-2xl mx-auto px-4">
      <nav className="py-8">
        <BackButton href="/" label="Back to home" />
      </nav>

      <h1 className="text-3xl font-medium mb-16">Posts</h1>

      <div className="space-y-16">
        {years.map((year) => (
          <section key={year}>
            <div className="grid grid-cols-[100px_1fr] gap-4">
              <div className="text-muted-foreground">{year}</div>
              <div className="space-y-8">
                {postsByYear[Number(year)].map((post) => {
                  const date = new Date(post.date);
                  const month = date.toLocaleString('default', { month: 'short' });
                  const day = date.getDate();
                  
                  return (
                    <div key={post.slug} className="group">
                      <Link 
                        href={`/posts/${post.slug}`}
                        className="block group-hover:text-primary transition-colors"
                      >
                        <div className="grid grid-cols-[1fr_100px] items-baseline gap-4 pb-2">
                          <h2 className="font-medium">{post.title}</h2>
                          <time className="text-muted-foreground text-right">
                            {month} {day}
                          </time>
                        </div>
                        <div className="h-px bg-border mt-2" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}