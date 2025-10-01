import { Router } from "express";
import loginRequiredMiddleware from "../common/middleware/loginRequiredMiddleware.ts";
import { getAllUsers } from "../controllers/users.controller.ts";

export const usersRouter = Router();

usersRouter.use(loginRequiredMiddleware);

usersRouter.get("/all", getAllUsers);
