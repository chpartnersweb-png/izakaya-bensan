// Canonical production URL shared by Astro, metadata, robots and the sitemap.
export const SITE_URL = 'https://izakaya-bensan.pages.dev/';
export const SITEMAP_URL = new URL('sitemap.xml', SITE_URL).href;
