import type { APIRoute } from 'astro';
import { createClient } from '@sanity/client';
import EventSchema from '../../lib/schema';
import * as valibot from 'valibot';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data: {[key: string]: any} = {};
    for (const [key, value] of formData.entries()) {
      if (key === 'tags') {
        if (!data.tags) {
          data.tags = [];
        }
        data.tags.push(value);
      } else {
        data[key] = value;
      }
    }
    

    const validatedData = valibot.parse(EventSchema, data);

    
    const client = createClient({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: '2025-08-26',
      token: process.env.SANITY_API_TOKEN,
    });

    const result = await client.createIfNotExists({
      _type: 'event',
      _id: 'drafts.' + validatedData.locationSlug + '-' + validatedData.title.toLowerCase().replace(/\s/g, '-'), // Add a unique ID for draft
      ...validatedData,
      status: 'pending',
    });

    return new Response(
      JSON.stringify({
        message: 'Event created successfully',
        data: result,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    let errorMessage = 'An unknown error occurred.';
    if (error.issues) {
      errorMessage = error.issues.map((issue: any) => issue.message).join(', ');
    } else if (error.message) {
      errorMessage = error.message;
    }

    return new Response(
      JSON.stringify({
        message: 'Error creating event',
        error: errorMessage,
      }),
      { status: 400 }
    );
  }
};
