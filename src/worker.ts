// src/worker.ts
// import { Hono } from 'hono'
// import { handle } from 'hono/cloudflare-workers'
// import authRoutes from './routes/auth'
// import urlRoutes from './routes/urls'
// import resultRoutes from './routes/result'

// const app = new Hono()

// app.route('/auth', authRoutes)
// app.route('/urls', urlRoutes)
// app.route('/results', resultRoutes)

// app.get('/', (c) => c.text('Hello from Cloudflare Worker!'))

// export default {
//   fetch: handle(app),
// }
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()
app.get('/', (c) => c.text('Hello'))

// serve(app)
app.fire()

export default app