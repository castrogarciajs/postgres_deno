import { config } from "$x/dotenv@v3.2.2/mod.ts";

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT, DB_HOSTNAME } = config();

/*** @config */
export const DATABASE_CONFIG = {
  user: DB_USERNAME,
  database: DB_NAME,
  hostname: DB_HOSTNAME,
  port: DB_PORT,
  password: DB_PASSWORD,
};
