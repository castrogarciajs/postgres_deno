export const DATABASE_CONFIG = {
  user: Deno.env.get("DB_USER"),
  database: Deno.env.get("DB_NAME"),
  hostname: Deno.env.get("DB_HOSTNAME"),
  port: Deno.env.get("DB_PORT"),
  password: Deno.env.get("DB_PASSWORD"),
};
