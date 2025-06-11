import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(process.env.DATABASE_URL!);

// import { Pool } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-serverless";

// const pool = new Pool({ connectionString: env.DATABASE_URL });
// const db = drizzle(pool)
