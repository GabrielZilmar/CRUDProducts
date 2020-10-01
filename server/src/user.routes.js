import express from "express";

import UserController from "./Controller/user";

const routes = express.Router();

routes.post("/user", UserController.store);
