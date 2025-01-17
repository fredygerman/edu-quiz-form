import { env } from "@/env.js"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./db/schema.ts", // Path to your schema file
  out: "./drizzle", // Output directory for generated files
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
