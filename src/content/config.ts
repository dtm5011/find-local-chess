import { defineCollection, z } from 'astro:content';

const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dayOfWeek: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
    recurrence: z.enum(['weekly', 'bi-weekly', 'monthly', 'first-of-month', 'last-of-month']).optional(),
    startTime: z.string(),
    endTime: z.string().optional(),
    venue: z.string(),
    description: z.string(),
    organizer: z.string().optional(),
    contact: z.string().optional(),
    tags: z.array(z.enum(['tournament', 'casual', 'blitz', 'rapid', 'classical', 'scholastic', 'online'])).optional(),
    location: z.string(),
    link: z.string().url().optional(),
  }),
});

const locationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
  locations: locationCollection,
};