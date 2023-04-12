import { Client } from "$x/postgres@v0.17.0/mod.ts";
import { DATABASE_CONFIG } from "../settings/config.ts";

export class Database {
  client: Client;

  constructor() {
    this.client = new Client(DATABASE_CONFIG);
    this.connect();
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.end();
  }
}
