import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema'
const sql = neon(process.env.NEXT_PUBLIC_DB_DRIZZLE_URL);
export const db = drizzle(sql,{schema});
