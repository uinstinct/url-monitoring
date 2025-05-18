import 'dotenv/config';
import { db } from '../src/utils/db';
import { users } from '../drizzle/schema';
import bcrypt from 'bcrypt';

// async function createUser() {
//   const email = 'user@example.com';
//   const password = 'test1234';

//   const hashedPassword = await bcrypt.hash(password, 10);

//   await db.insert(users).values({
//     email,
//     passwordHash: hashedPassword,
//   });

//   console.log('✅ User created:', email);
// }

// createUser().catch((err) => {
//   console.error('❌ Error creating user:', err);
// });
async function main() {
  const email = 'user@example.com';
  const plainPassword = 'yourpassword';

  const passwordHash = await bcrypt.hash(plainPassword, 10);

  await db.insert(users).values({
    email,
    passwordHash,
  });

  console.log(`✅ User created: ${email}`);
}

main()
  .catch((err) => {
    console.error('❌ Error creating user:', err);
  })
  .finally(() => process.exit());
