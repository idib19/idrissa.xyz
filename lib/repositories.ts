export interface Repository {
  name: string;
  description: string;
  url: string;
  topics: string[];
  language: string;
}

export const repositories: Repository[] = [

  {
    name: "AI SMS Agent",
    description: "An intelligent SMS-based appointment booking system powered by Anthropic's AI and integrated with Twilio.",
    url: "https://github.com/idib19/SMS-AI-AGENT",
    topics: ["Node.js", "MongoDB", "Twilio", "Anthropic"],
    language: "JavaScript"
  },
  {
    name: "HTTP Server",
    description: "A custom HTTP server implementation that handles basic CRUD operations with SQL database integration.",
    url: "https://github.com/idib19/HTTP-SERVER",
    topics: ["Python", "SQL", "HTTP", "CRUD"],
    language: "Python"
  },
  {
    name: "Ikasugu",
    description: "A scalable multi-tenant e-commerce platform with modern authentication and payment processing.",
    url: "https://github.com/idib19/NODE-X-1",
    topics: ["Next.js", "Prisma", "TypeScript"],
    language: "TypeScript"
  }
];