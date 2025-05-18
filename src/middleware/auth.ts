// import { verify } from 'hono/jwt';

// const authMiddleware = async (c, next) => {
//   const token = c.req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) return c.json({ error: 'Unauthorized' }, 401);

//   try {
//     const payload = await verify(token, process.env.JWT_SECRET!);
//     c.set('user', payload); // set user info in context
//     await next();
//   } catch (e) {
//     return c.json({ error: 'Invalid token' }, 401);
//   }
// };



// src/middleware/auth.ts
// import { verify } from 'hono/jwt';

// export const authMiddleware = verify({
//   secret: process.env.JWT_SECRET || '',  // make sure this is set in your environment
//   onVerified: (payload, c) => {
//     // `payload` is the decoded JWT payload
//     c.set('userId', payload.userId);
//   },
// });

// src/middleware/auth.ts
// import { verify } from 'hono/jwt';
// import { MiddlewareHandler } from 'hono';

// export const authMiddleware: MiddlewareHandler = verify({
//   secret: process.env.JWT_SECRET || '',
//   onVerified: (payload, c) => {
//     c.set('userId', payload.userId);
//   },
// });

// export const authMiddleware: MiddlewareHandler = async (c, next) => {
//   // Your auth logic
//   await next();
// };
// export default authMiddleware;
import 'hono';

declare module 'hono' {
  interface ContextVariableMap {
    userId: string;
  }
}


import { verify } from 'hono/jwt';
import { MiddlewareHandler } from 'hono';

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header('Authorization');
//   const token = c.req.header('Authorization')?.replace('Bearer ', '');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    console.log('No token provided');
    return c.json({ error: 'Unauthorized' }, 401);
  }
  try {
    const payload = await verify(token, process.env.JWT_SECRET || '');
    // c.set('userId', payload.userId);
    console.log('Token payload:', payload);
    c.set('userId', String((payload as { userId?: string | number }).userId));

    await next();
  } catch (e) {
    console.log('JWT verification failed:', e);
    return c.json({ error: 'Invalid token' }, 401);
  }
};


