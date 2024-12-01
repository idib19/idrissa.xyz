import { BackButton } from '@/components/back-button';
import { RepositoryCard } from '@/components/repository-card';
import { repositories } from '@/lib/repositories';

export default function RepositoriesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <nav className="py-8">
        <BackButton href="/" label="Back to home" />
      </nav>
      
      <h1 className="text-3xl font-medium mb-4">Repositories</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A collection of my open-source projects and contributions.
      </p>

      <div className="grid gap-4">
        {repositories.map((repo) => (
          <RepositoryCard key={repo.name} repository={repo} />
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>Find more on my <a href="https://github.com/idib19" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub profile</a></p>
      </footer>
    </div>
  );
}