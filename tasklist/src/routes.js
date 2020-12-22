import { Router } from "express";

import authMiddelwares from "./app/middlewares/auth";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddelwares);

routes.put("/users", UserController.update);

export default routes;
