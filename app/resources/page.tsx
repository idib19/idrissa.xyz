import { BackButton } from '@/components/back-button';

export default function ResourcesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <nav className="py-8">
        <BackButton href="/" label="Back to home" />
      </nav>
      
      <h1 className="text-3xl font-medium mb-8">Resources</h1>
      
      <div className="prose prose-neutral max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          A curated collection of resources that have shaped my understanding of software engineering and personal growth.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-medium mb-4">Books</h2>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="font-medium">Clean Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    By Robert C. Martin - Essential principles of software architecture and design that stand the test of time.
                  </p>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://www.amazon.com/Principles-Life-Work-Ray-Dalio/dp/1501124021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="font-medium">Principles</h3>
                  <p className="text-sm text-muted-foreground">
                    By Ray Dalio - A systematic approach to decision-making and problem-solving that can be applied to both life and engineering.
                  </p>
                </a>
              </li>        
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Learning Resources</h2>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/pages/readings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="font-medium">MIT OpenCourseWare: Blockchain and Money</h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive course exploring blockchain technology, cryptocurrencies, and their impact on financial systems and business.
                  </p>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://roadmap.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="font-medium">Roadmap.sh</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear and organized knowledge paths for software development, helping you plan what to learn next.
                  </p>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://refactoring.guru/design-patterns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-hover:text-primary transition-colors"
                >
                  <h3 className="font-medium">Refactoring Guru</h3>
                  <p className="text-sm text-muted-foreground">
                    An excellent resource for learning design patterns and refactoring techniques.
                  </p>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}