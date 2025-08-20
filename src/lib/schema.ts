import { object, string, optional, array, enumType, url } from 'valibot';

export const EventSchema = object({
  title: string(),
  dayOfWeek: enumType(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
  recurrence: optional(enumType(['weekly', 'bi-weekly', 'monthly', 'first-of-month', 'last-of-month'])),
  startTime: string(),
  endTime: optional(string()),
  venue: string(),
  description: string(),
  organizer: optional(string()),
  contact: optional(string()),
  tags: optional(array(enumType(['tournament', 'casual', 'blitz', 'rapid', 'classical', 'scholastic', 'online']))),
  locationSlug: string(),
  link: optional(string([url()])),
});
