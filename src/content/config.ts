import { defineCollection, z } from 'astro:content';
import { type Icons } from 'lucide';
// Define a schema for blog posts
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string().default('General'),
    tags: z.array(z.string()).default(['translation']),
    draft: z.boolean().default(false),
    cover: z.object({
      src: image(),
      alt: z.string().optional(),
    }),
  }),
});

// Export the collections

const industriesAndServicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    icon: z.custom<Icons>((val): val is Icons => true),
    image: z.string(),
    order: z.number(),
  }),
});

// Legal pages collection
const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    order: z.number(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'industries': industriesAndServicesCollection,
  'services': industriesAndServicesCollection,
  'legal': legalCollection,
};