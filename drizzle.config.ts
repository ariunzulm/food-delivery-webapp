import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/foods.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "2411fe966c7fb2e2e7945a70e226dcf0",
    databaseId: "8a7083fc-50ee-49d6-9b5b-31cfab125809",
    token: "PnjQuOS2IyveoYRJ0C3M-wjsmF0JUXLc-6Pq833Y",
  },
});
