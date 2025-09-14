import { object, string, optional, array, picklist, parse } from 'valibot';

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

const data = {
  title: "O'Side Chess Meet",
  dayOfWeek: 'Saturday',
  recurrence: 'weekly',
  startTime: '14:00',
  endTime: '18:00',
  venue: 'Oceanside Pier (or Pier View Coffee)',
  description: 'Casual chess meet-up in Oceanside.',
  organizer: 'OSIDECHESS',
  contact: 'OSIDECHESSMEET@GMAIL.COM',
  tags: [ 'casual' ],
  location: 'Oceanside, CA',
  link: 'https://www.instagram.com/osidechessmeet/'
};

try {
  const validatedData = parse(EventSchema, data);
  console.log('Validation successful:', validatedData);
} catch (error) {
  console.error('Validation error:', error);
}
