import express from "express";

import UserController from "./Controller/user";

const routes = express.Router();

/**
 * User routes
 */
routes.post("/user", UserController.store);

export default routes;
