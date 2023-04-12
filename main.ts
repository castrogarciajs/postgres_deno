import { Application } from "$x/oak@v12.1.0/mod.ts";

import router from "./routes/routes.ts";

console.log("http://localhost:8080");

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
