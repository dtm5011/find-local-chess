import { object, string, optional, array, picklist, minLength, nonEmpty, custom } from 'valibot';

// Custom URL validator that's more strict
const strictUrl = custom<string>((input) => {
  if (!input || input.trim() === '') return true; // Allow empty for optional fields
  
  try {
    const urlObj = new URL(input);
    // Must have http or https protocol
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}, 'Please enter a valid URL starting with http:// or https:// (e.g., https://example.com)');

const EventSchema = object({
  title: string([nonEmpty('Event name is required')]),
  dayOfWeek: picklist(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
  recurrence: optional(picklist(['weekly', 'bi-weekly', 'monthly', 'first-of-month', 'last-of-month'])),
  startTime: string([nonEmpty('Start time is required')]),
  endTime: optional(string()),
  venue: string([nonEmpty('Venue is required')]),
  description: string([nonEmpty('Description is required'), minLength(10, 'Description must be at least 10 characters')]),
  organizer: optional(string()),
  contact: optional(string()),
  tags: optional(array(picklist(['tournament', 'casual', 'blitz', 'rapid', 'classical', 'scholastic', 'online']))),
  location: string([nonEmpty('Location is required')]),
  link: optional(string([strictUrl])),
});

export default EventSchema;