import { load } from "$std/dotenv/mod.ts";

load();

export const DATABASE_CONFIG = {
  username: Deno.env.get("DB_USERNAME"),
  database: Deno.env.get("DB_NAME"),
  hostname: Deno.env.get("DB_HOSTNAME"),
  port: Deno.env.get("DB_PORT"),
  password: Deno.env.get("DB_PASSWORD"),
};
