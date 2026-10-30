import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify(
      {
        status: 200,
        message: 'System operational',
        uptime: '99.98%',
        developer: {
          name: 'Anthony Suryadjie',
          title: 'Full-Stack Developer',
          capabilities: [
            'End-to-End Web Applications',
            'RESTful API Systems',
            'Database Modeling & Querying',
            'JWT & RBAC Security Flows',
            'Responsive UI & Component Architecture'
          ],
          stack: {
            frontend: ['Astro', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'Flutter'],
            backend: ['Node.js', 'Express.js', 'Hapi.js', 'REST APIs'],
            databases: ['MongoDB', 'SQLite', 'Mongoose ODM'],
            security: ['JWT', 'RBAC Middleware', 'Bcrypt']
          },
          architecture: 'Majestic Monolith',
          status: 'Open for full-stack & software engineering opportunities'
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
