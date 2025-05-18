// src/utils/db.ts
import 'dotenv/config'; // load .env
// import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { schema } from '../../drizzle/schema'; // adjust the path as needed



// Create client
const client = postgres(process.env.DATABASE_URL!, {
  max: 1, // optional, adjust pool settings if needed
});

export const db = drizzle(client, { schema }); // ✅ important!

// Export drizzle instance
// export const db = drizzle(client);

