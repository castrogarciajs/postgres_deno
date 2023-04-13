import { Context } from "$x/oak@v12.1.0/mod.ts";
import { Database } from "../database/database.ts";

export class Services {
  main(ctx: Context) {
    return (ctx.response.body = [
      {
        author: "Johan Sebastian",
        name: "Deno REST",
        data: "http://localhost:8080/person",
        LINCESE: "ISC",
      },
    ]);
  }

  async get(ctx: Context) {
    try {
      const database = new Database();
      const response = await database.query("SELECT * FROM task_deno");

      return ctx.response.body = response.rows;
    } catch (error) {
      const message = ctx.throw(error.messagee);
      return ctx.response.body = {
        message,
      };
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
      const message = ctx.throw(error.messagee);
      return ctx.response.body = {
        message,
      };
    }
  }

  async delete(ctx: Context) {
    try {
      const id = ctx.params.id;
      const database = new Database();
      const response = await database.query(
        "DELETE FROM task_deno WHERE id = $1",
        [id],
      );
      return ctx.response.body = {
        message: "Person deleting",
      };
    } catch (error) {
      const message = ctx.throw(error.messagee);
      return ctx.response.body = {
        message,
      };
    }
  }

  async update(ctx: Context) {
    try {
      const body = ctx.request.body();
      const id = ctx.params.id;
      const decoder = new TextDecoder().decode(await body.value);
      const { name, lastname } = JSON.parse(decoder);

      const database = new Database();
      const response = await database.query(
        "UPDATE task_deno SET name = $1, lastname = $2 WHERE id = $3",
        [name, lastname, id],
      );
      return ctx.response.body = { update: "person" };
    } catch (error) {
      const message = ctx.throw(error.messagee);
      return ctx.response.body = {
        message,
      };
    }
  }
}
