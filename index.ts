import "dotenv/config";
import express from "express";
import serverless from "serverless-http";
import errorHandler from "./src/common/middleware/errorHandler.ts";
import { usersRouter } from "./src/routes/users.routes.ts";
import { sequelize } from "./src/common/config.ts";
import { authRouter } from "./src/routes/auth.routes.ts";
import { loggingMiddleware } from "./src/common/middleware/loggingMiddleware.ts";
import { sessionMiddleware } from "./src/common/middleware/sessionMiddleware.ts";

export const app = express();

app.use(loggingMiddleware);

app.use(sessionMiddleware);

app.use("/users", usersRouter);

app.use("/auth", authRouter);

app.use(errorHandler);

sequelize.authenticate();

export const handler = serverless(app);
