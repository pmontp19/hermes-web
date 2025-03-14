// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define a schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('TranslateHub Team'),
    image: z.string().optional(),
    category: z.string().default('General'),
    tags: z.array(z.string()).default(['translation']),
    draft: z.boolean().default(false),
  }),
});

// Export the collections

const industriesAndServicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'industries': industriesAndServicesCollection,
  'services': industriesAndServicesCollection,
};