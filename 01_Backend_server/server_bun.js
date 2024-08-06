import { serve } from 'bun';
serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      return new Response('Hello world', { status: 200 });
    } else {
      return new Response('URL not found', { status: 404 });
    }
  },
  port: 3000,
  hostname: '127.0.0.1',
});
console.log(`Server is running on http://127.0.0.1:3000 `);
