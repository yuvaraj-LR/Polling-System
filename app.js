import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import pollingRoutes from "./src/polling/routes/polling.routes.js"

import { errorHandlerMiddleware } from "./middleware/errorHandling.middleware.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/questions/", pollingRoutes);

app.use(errorHandlerMiddleware);

export default app;