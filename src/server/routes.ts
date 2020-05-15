import { Router, Context } from "https://deno.land/x/oak/mod.ts";

import UserController from "../app/controllers/UserController.ts";

const routes = new Router();

routes.post("/users", UserController.store);

export default routes;
