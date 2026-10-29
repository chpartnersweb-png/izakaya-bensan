import type { APIRoute } from 'astro';
import { SITEMAP_URL } from '../data/site.mjs';

export const prerender = true;

export const GET: APIRoute = () => new Response(
  ['User-agent: *', 'Allow: /', '', 'Sitemap: ' + SITEMAP_URL, ''].join('\n'),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
