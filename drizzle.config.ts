import 'dotenv/config'; // this automatically loads .env
import type { Config } from 'drizzle-kit';

// export default {
const config = {
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle/migrations',
  dialect:'postgresql',
  // dialect: 'pg',    
  // driver: 'pg',
  dbCredentials: {
    // connectionString: 'postgresql://postgres@localhost:5432/urlmonitoring',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'no-password', // fill this if your DB has a password
    database: 'urlmonitoring',
  },
}satisfies Config;

export default config;
