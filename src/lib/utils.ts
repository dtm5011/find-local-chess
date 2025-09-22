import slugify from 'slugify';

export function slugifyLocation(location: string): string {
  return slugify(location, { lower: true, strict: true });
}

export function formatTime(time24: string): string {
  if (!time24) return '';

  const [hours, minutes] = time24.split(':');
  const hour = parseInt(hours, 10);
  const min = parseInt(minutes, 10);

  if (hour === 0) {
    return min === 0 ? '12am' : `12:${minutes}am`;
  } else if (hour < 12) {
    return min === 0 ? `${hour}am` : `${hour}:${minutes}am`;
  } else if (hour === 12) {
    return min === 0 ? '12pm' : `12:${minutes}pm`;
  } else {
    const hour12 = hour - 12;
    return min === 0 ? `${hour12}pm` : `${hour12}:${minutes}pm`;
  }
}

export function formatTimeRange(startTime: string, endTime?: string): string {
  const formattedStart = formatTime(startTime);
  if (!endTime) return formattedStart;
  const formattedEnd = formatTime(endTime);
  return `${formattedStart} - ${formattedEnd}`;
}