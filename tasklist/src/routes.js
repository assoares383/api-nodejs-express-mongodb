import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/teste", async (req, res) => {
  const user = await User.create({
    name: "Alexandre",
    email: "alexandressoares383@gmail.com",
    password_hash: "123456",
  });

  res.json(user);
});

export default routes;
