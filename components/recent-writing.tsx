export function RecentWriting() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Recent Writing</h2>
      <div className="grid gap-4">
        <article className="group">
          <time className="text-sm text-muted-foreground">January 1, 2024</time>
          <h3 className="font-medium group-hover:text-primary">
            <a href="/writing/post-slug">Title of your latest blog post</a>
          </h3>
        </article>
      </div>
    </section>
  );
}