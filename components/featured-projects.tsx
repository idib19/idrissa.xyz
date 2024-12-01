export function FeaturedProjects() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Featured Projects</h2>
      <div className="grid gap-4">
        <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
          <h3 className="font-medium mb-2">Project Name</h3>
          <p className="text-sm text-muted-foreground">Brief description of your project and its impact.</p>
        </div>
      </div>
    </section>
  );
}