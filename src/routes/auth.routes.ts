import { Router } from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.ts";
import validationMiddleware from "../common/middleware/validationMiddleware.ts";

export const authRouter = Router();

authRouter.post(
  "/login",
  body("email").notEmpty().trim().isEmail(),
  body("password").notEmpty().trim().isLength({ min: 2, max: 16 }),
  validationMiddleware,
  login,
);

authRouter.post(
  "/register",
  body("email").notEmpty().trim().isEmail(),
  body("password").notEmpty().trim().isLength({ min: 4, max: 16 }),
  body("confirmPassword").notEmpty().trim().isLength({ min: 4, max: 16 }),
  body("firstName").notEmpty().trim().isLength({ min: 2, max: 32 }),
  body("lastName").notEmpty().trim().isLength({ min: 2, max: 32 }),
  register,
);
