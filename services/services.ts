import { Context } from "$x/oak@v12.1.0/mod.ts";
import { Database } from "../database/database.ts";

export class Services {
  main(ctx: Context) {
    return (ctx.response.body = [
      {
        name: "deno posgresql",
        person: "http://localhost:8080/person",
      },
    ]);
  }

  async get(ctx: Context) {
    try {
      const database = new Database();
      const response = await database.query("SELECT * FROM task_deno");

      return ctx.response.body = response.rows;
    } catch (error) {
      return ctx.response.body = "error";
    }
  }
}
