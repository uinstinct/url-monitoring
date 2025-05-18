import { Hono } from 'hono';
import { serve } from '@hono/node-server';

// import authRoutes from './routes/auth';
import auth from './routes/auth';
import urlRoutes from './routes/urls';
import resultRoutes from './routes/result';
// import { jwtMiddleware } from './middleware/auth';
import { authMiddleware } from './middleware/auth';

import 'dotenv/config';


const app = new Hono();

app.get('/', (c) => c.text('Server is running!'));

// Public routes (like register/login)
// app.route('/auth', authRoutes);
app.route('/auth', auth);

// // Apply JWT auth middleware for protected routes
// app.use('/urls', jwtMiddleware);
// app.use('/results', jwtMiddleware);

// Apply auth middleware to protected routes
// ❌ BAD (applies auth globally before urlRoutes and may run twice)
// app.use('/urls', authMiddleware);
app.use('/results', authMiddleware);


// Protected routes
app.route('/urls', urlRoutes);
app.route('/results', resultRoutes);

serve(app);

