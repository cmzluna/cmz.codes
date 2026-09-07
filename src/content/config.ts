import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.object({
      repo: z.string().optional(),
      deploy: z.string().optional(),
    }),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const technologiesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    category: z.enum(['frontend', 'mobile', 'backend', 'tools']),
    icon: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  technologies: technologiesCollection,
};
