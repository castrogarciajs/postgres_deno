import { Router } from "$x/oak@v12.1.0/mod.ts";
import { Services } from "../services/services.ts";

const router = new Router();
const services = new Services()

router.get("/", services.main);

export default router;
