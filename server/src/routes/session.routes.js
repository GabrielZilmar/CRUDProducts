import express from "express";

import SessionController from "../Controller/session";

const routes = express.Router();

routes.post("/session", SessionController.store);

export default routes;
