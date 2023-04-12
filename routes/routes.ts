import { Router, Context } from "$x/oak@v12.1.0/mod.ts";

const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = [
    {
      name: "deno posgresql",
      books: "http://localhost:8080/api/books",
    },
  ];
});

router.get("/api/books", (ctx: Context) => {
  ctx.response.body = [
    {
      name: "book",
    },
  ];
});

export default router;
