export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content?: string;
}

export const posts: Post[] = [
  {
    slug: 'what-are-transformers',
    title: 'What are Transformers?',
    excerpt: 'An introduction to the architecture that revolutionized natural language processing and why they matter.',
    date: '2024-01-15',
    readingTime: '5 min read',
    content: `
Transformers have revolutionized the field of natural language processing, enabling breakthroughs in machine translation, text generation, and understanding human language.

## The Architecture

At its core, the Transformer architecture introduces a novel approach called "self-attention," which allows the model to weigh the importance of different words in a sentence when processing language. Unlike previous architectures that processed words sequentially, Transformers can process all words simultaneously, leading to more efficient and effective language understanding.

## Key Components

- Self-Attention Mechanism
- Positional Encoding
- Multi-Head Attention
- Feed-Forward Networks

## Impact on AI

Transformers have enabled models like GPT and BERT to achieve unprecedented performance in various language tasks. Their ability to handle long-range dependencies and parallel processing has made them the foundation for modern language models.

## Future Directions

As we continue to scale and improve Transformer architectures, we're seeing applications beyond language processing, including computer vision, audio processing, and even protein folding prediction. The versatility of this architecture suggests it will remain fundamental to AI advancement for years to come.
    `
  },
  {
    slug: 'future-of-ai',
    title: 'The Future of AI',
    excerpt: 'Exploring the potential impact of artificial intelligence on software development and society.',
    date: '2023-12-10',
    readingTime: '7 min read',
    content: `
As we stand at the cusp of a new era in technology, artificial intelligence continues to reshape our world in profound ways. Let's explore what the future might hold for AI in software development and society at large.

## AI in Software Development

The integration of AI into software development workflows is already transforming how we write, test, and deploy code. From intelligent code completion to automated testing, AI is becoming an indispensable tool for developers.

## Key Trends

- AI-powered code generation
- Automated bug detection and fixing
- Intelligent code review systems
- Natural language programming interfaces

## Societal Impact

The widespread adoption of AI technologies raises important questions about:

- Job displacement and creation
- Privacy and data protection
- Algorithmic bias and fairness
- Human-AI collaboration

## Looking Ahead

While challenges exist, the potential benefits of AI are immense. The key lies in responsible development and deployment, ensuring that AI serves humanity's best interests while mitigating potential risks.
    `
  },
  {
    slug: 'building-modern-apis',
    title: 'Building Modern APIs',
    excerpt: 'Best practices for designing and implementing RESTful APIs in 2023.',
    date: '2023-10-05',
    readingTime: '6 min read',
    content: `
Modern APIs are the backbone of digital transformation, enabling seamless integration between services and applications. Let's explore the best practices for building robust and scalable APIs.

## Design Principles

When designing modern APIs, several key principles should guide our decisions:

- Resource-oriented design
- Clear and consistent naming conventions
- Proper use of HTTP methods
- Comprehensive documentation

## Security Considerations

Security should never be an afterthought in API design:

- Authentication and authorization
- Rate limiting and throttling
- Input validation
- HTTPS encryption

## Performance Optimization

Optimizing API performance is crucial for scalability:

- Efficient caching strategies
- Pagination and filtering
- Response compression
- Database query optimization

## Versioning Strategy

A well-thought-out versioning strategy ensures backward compatibility:

- Semantic versioning
- URI versioning
- Header versioning
- Content negotiation
    `
  },
  {
    slug: 'scaling-distributed-systems',
    title: 'Scaling Distributed Systems',
    excerpt: 'Practical approaches to building and scaling distributed systems in the cloud.',
    date: '2023-09-15',
    readingTime: '8 min read',
    content: `
Distributed systems present unique challenges in design, implementation, and maintenance. This post explores practical strategies for building scalable distributed systems.

## Core Principles

Understanding these fundamental principles is crucial:

- CAP theorem implications
- Eventual consistency
- Fault tolerance
- Data partitioning

## Scaling Strategies

Different approaches to scaling serve different needs:

- Horizontal vs. vertical scaling
- Load balancing techniques
- Caching strategies
- Database sharding

## Monitoring and Observability

Effective monitoring is essential for distributed systems:

- Metrics collection
- Distributed tracing
- Log aggregation
- Alert systems

## Common Pitfalls

Learn from these common mistakes:

- Network partition handling
- State management
- Cache invalidation
- Deployment strategies
    `
  }
];