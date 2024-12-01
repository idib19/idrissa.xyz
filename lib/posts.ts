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
  },
  {
    slug: 'building-modern-apis',
    title: 'Building Modern APIs',
    excerpt: 'Best practices for designing and implementing RESTful APIs in 2023.',
    date: '2023-10-05',
    readingTime: '6 min read',
  }
];