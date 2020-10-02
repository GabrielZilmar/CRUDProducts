import express from "express";

import UserController from "../Controller/user";

const routes = express.Router();

routes.post("/user", UserController.store);
routes.delete("/user", UserController.delete);
routes.get("/user", UserController.show);
routes.get("/users", UserController.list);
routes.get("/users/admin", UserController.listAdmin);
routes.get("/users/no-admin", UserController.listNoAdmin);

export default routes;
