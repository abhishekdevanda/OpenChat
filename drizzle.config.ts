import { defineConfig } from "drizzle-kit";

const isProd = process.env.NODE_ENV === "production";
const url = isProd
  ? (process.env.DATABASE_URL as string)
  : (process.env.DATABASE_URL_DEV as string);
export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url },
});
