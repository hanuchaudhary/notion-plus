import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({
    path : ".env",
});

const config = {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    dialect: 'postgresql',

    dbCredentials : {
        database : process.env.DB_NAME!,
        host : process.env.DB_HOST!,
        port : Number(process.env.DB_PORT),
        password : process.env.DB_PASSWORD!,
        url : process.env.DB_URL!,
        user : process.env.DB_NAME!,
    }
} satisfies Config;

export default config;

