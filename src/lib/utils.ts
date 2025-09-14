import slugify from 'slugify';

export function slugifyLocation(location: string): string {
  return slugify(location, { lower: true, strict: true });
}