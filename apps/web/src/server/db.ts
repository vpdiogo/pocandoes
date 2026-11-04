import { Pool } from "pg";
const globalForPool = globalThis as typeof globalThis & { pocandoPool?: Pool };
export const pool = globalForPool.pocandoPool ?? new Pool({ connectionString: process.env.DATABASE_URL });
if (process.env.NODE_ENV !== "production") globalForPool.pocandoPool = pool;
