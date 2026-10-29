import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const base = site!.href.replace(/\/$/, '');
  const urls = [
    { loc: '/work', img: ['/img/quilted-health-maternity-ehr-illustration-hero-1120.webp'] },
    { loc: '/work/quilted-health', img: ['/img/quilted-health-maternity-ehr-illustration-hero-1120.webp', '/img/quilted-health-legacy-ehr-before.webp', '/img/quilted-health-new-medplum-ehr-after.webp'] },
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url><loc>${base}${u.loc}</loc>${u.img.map((i) => `<image:image><image:loc>${base}${i}</image:loc></image:image>`).join('')}</url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
