import type { APIRoute } from 'astro';

export const get: APIRoute = () => {
  return new Response('Hello, World!', { status: 200 });
}
