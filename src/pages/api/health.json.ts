import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify(
      {
        status: 200,
        message: 'System operational',
        deployedOn: 'Cloudflare & Cloud PaaS',
        studio: {
          name: 'Djie Production',
          founder: 'Anthony Djie',
          title: 'Full-Stack Software Development',
          capabilities: [
            'End-to-End Full-Stack Web Applications',
            'Cross-Platform Mobile Apps (Flutter & Dart)',
            'Structured RESTful API Systems',
            'Database Modeling & Offline SQLite Storage',
            'Stateless JWT Authentication & Password Hashing',
            'Request Schema Validation with Zod'
          ],
          stack: {
            frontend: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
            mobile: ['Flutter', 'Dart', 'Android Native'],
            backend: ['Node.js', 'Express.js', 'Zod', 'REST APIs'],
            databases: ['MongoDB', 'SQLite (WAL Mode)', 'Mongoose ODM'],
            infrastructure: ['Cloudflare CDN', 'Render', 'Git & GitHub']
          },
          status: 'Open for full-time, remote roles & client projects — djieproduction.com'
        },
        timestamp: new Date().toISOString()
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
