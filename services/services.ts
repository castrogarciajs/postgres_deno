import { Context } from "$x/oak@v12.1.0/mod.ts";

export class Services {
  main(ctx: Context) {
    return ctx.response.body = [
      {
        name: "deno posgresql",
        books: "http://localhost:8080/api/person",
      },
    ];
  }
}
