import { object, string, optional, array, picklist } from 'valibot';

const EventSchema = object({
  title: string(),
  dayOfWeek: picklist(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
  recurrence: optional(picklist(['weekly', 'bi-weekly', 'monthly', 'first-of-month', 'last-of-month'])),
  startTime: string(),
  endTime: optional(string()),
  venue: string(),
  description: string(),
  organizer: optional(string()),
  contact: optional(string()),
  tags: optional(array(picklist(['tournament', 'casual', 'blitz', 'rapid', 'classical', 'scholastic', 'online']))),
  location: string(),
  link: optional(string()),
});

export default EventSchema;