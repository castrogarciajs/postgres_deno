import { testing } from "$x/oak@v12.1.0/mod.ts";
import type { Middleware } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.183.0/testing/asserts.ts";

const mw: Middleware = async (ctx, next) => {
  await next();
  if (ctx.request.url.pathname === "/") {
    ctx.response.body = "hello";
    ctx.response.headers.set("x-hello-a", "hello");
  }
};

Deno.test("should return true", async () => {
  const ctx = testing.createMockContext({
    path: "/",
  });
  const next = testing.createMockNext();

  await mw(ctx, next);
  assertEquals(ctx.response.body, "hello");
});
