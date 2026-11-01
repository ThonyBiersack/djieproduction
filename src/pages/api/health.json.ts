import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify(
      {
        status: 200,
        message: 'System operational',
        uptime: '99.98%',
        studio: {
          name: 'Djie Production',
          founder: 'Anthony Djie',
          title: 'Full-Stack Software Engineering Studio',
          capabilities: [
            'End-to-End Full-Stack Web Applications',
            'Cross-Platform Mobile Apps (Flutter & Dart)',
            'Mission-Critical RESTful API Systems',
            'Database Modeling & Offline SQLite Storage',
            'Stateless JWT & Granular RBAC Security Flows',
            'Edge Deployments & Modern UI Islands'
          ],
          stack: {
            frontend: ['Astro', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
            mobile: ['Flutter', 'Dart', 'Android Native'],
            backend: ['Node.js', 'Express.js', 'Hapi.js', 'REST APIs'],
            databases: ['MongoDB', 'SQLite (WAL Mode)', 'Mongoose ODM'],
            infrastructure: ['Cloudflare Edge', 'Render', 'Git & GitHub']
          },
          status: 'Open for client projects & contract engineering — djieproduction.com'
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
