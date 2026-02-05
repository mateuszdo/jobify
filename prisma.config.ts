import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  datasource: {
    // Use the IPv4-compatible Session Pooler string for db push
    url: process.env.DIRECT_DATABASE_URL,
  },
});
