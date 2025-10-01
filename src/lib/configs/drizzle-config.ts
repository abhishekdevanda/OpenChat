import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const isProd = process.env.NODE_ENV === "production";

const databaseUrl = isProd
  ? (process.env.DATABASE_URL as string)
  : (process.env.DATABASE_URL_DEV as string);
const sql = neon(databaseUrl);
export const db = drizzle({ client: sql });
