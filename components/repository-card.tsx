import { Repository } from '@/lib/repositories';
import { ExternalLink } from 'lucide-react';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <a
      href={repository.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium group-hover:text-primary transition-colors">
          {repository.name}
        </h3>
        <ExternalLink className="h-4 w-4 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        {repository.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {repository.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {repository.language}
        </span>
      </div>
    </a>
  );
}