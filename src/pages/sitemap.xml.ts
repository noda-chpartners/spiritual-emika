import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteConfig.url}</loc></url>\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
