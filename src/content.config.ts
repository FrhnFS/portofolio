import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Setiap file .md di src/content/data-projects/ menjadi satu proyek data analis
const dataProjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/data-projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      tools: z.array(z.string()),
      date: z.coerce.date(),
      cover: image().optional(),
      dashboardUrl: z.string().url().optional(), // link dashboard publik
      embedUrl: z.string().url().optional(), // link embed (iframe) dashboard
      repoUrl: z.string().url().optional(),
      highlights: z.array(z.string()).default([]), // angka/insight utama
      featured: z.boolean().default(false),
    }),
});

export const collections = { dataProjects };
