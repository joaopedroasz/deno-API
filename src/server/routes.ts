import { Router, Context } from "https://deno.land/x/oak/mod.ts";

import UserController from "../app/controllers/UserController.ts";

const routes = new Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

export default routes;
