import express from "express";
import cors from "cors";

import UserRoutes from "./routes/user.routes.js";
import SessionRoutes from "./routes/session.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoutes, SessionRoutes);

app.listen(3030);
