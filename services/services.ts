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
      return ctx.response.body = "error server";
    }
  }

  async save(ctx: Context) {
    try {
      const body = ctx.request.body();
      const decoder = new TextDecoder().decode(await body.value);
      const { name, lastname } = JSON.parse(decoder);

      const database = new Database();
      const response = await database.query(
        "INSERT INTO task_deno(name,lastname) VALUES ($1, $2) RETURNING *",
        [name, lastname],
      );
      ctx.response.body = response.rows;
    } catch (error) {
      return ctx.response.body = "error server";
    }
  }
}
