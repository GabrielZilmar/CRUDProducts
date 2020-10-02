import express from "express";

import UserController from "./Controller/user";
import SessionController from "./Controller/session";

const routes = express.Router();

/**
 * User routes
 */
routes.post("/user", UserController.store);

/**
 * Session routes
 */
routes.post("/session", SessionController.store);

export default routes;
