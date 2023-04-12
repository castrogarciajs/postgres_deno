import { Application } from "$x/oak@v12.1.0/mod.ts";
import { Client } from "$x/postgres@v0.17.0/mod.ts";
import router from "./routes/routes.ts";
import { DATABASE_CONFIG } from "./settings/config.ts";

console.log("http://localhost:8080");

const app = new Application();
const client = new Client(DATABASE_CONFIG);

await client.connect();

console.log("postgressql succesfully");

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
