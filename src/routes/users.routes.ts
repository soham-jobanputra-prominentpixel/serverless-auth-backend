import { Router } from "express";
// import loginRequiredMiddleware from "../common/middleware/loginRequiredMiddleware.ts";
import { getAllUsers } from "../controllers/users.controller.ts";

export const usersRouter = Router();

// usersRouter.get("/all", loginRequiredMiddleware, getAllUsers);
usersRouter.get("/all", getAllUsers);
