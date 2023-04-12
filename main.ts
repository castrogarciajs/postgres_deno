import { Application } from "$x/oak@v12.1.0/mod.ts";


(async () => {
    const app = new Application();
    app.use((ctx) => {
        ctx.response.body = {
            deno: "deploy",
        };
    });
    await app.listen({ port: 8080 });
    console.log("http://localhost:8080")
})();
