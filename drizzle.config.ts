import type { Config } from 'drizzle-kit';
import { env } from '$env/static/private';

export default {
	schema: './src/lib/server/schema.ts',
	out: './drizzle',
	driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
		connectionString: process.env.DATABASE_URL,
	}
} satisfies Config;