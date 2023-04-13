import { Client } from "$x/postgres@v0.17.0/mod.ts";
import { DATABASE_CONFIG } from "../settings/config.ts";

export class Database {
  client: Client;

  constructor() {
    this.client = new Client(DATABASE_CONFIG);
  }
  // deploy
  query(query: string, ...args: any[]) {
    const resolve = this.client.queryObject(query, ...args);
    return resolve;
  }
}
