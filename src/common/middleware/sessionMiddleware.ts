import cookieSession from "cookie-session";
import { Router } from "express";
import process from "node:process";

export const sessionMiddleware = Router();

sessionMiddleware.use((req, _res, next) => {
  try {
    req.body = JSON.parse(req.body);
  } catch (err: unknown) {
    const error = err as Error;
    switch (error.name) {
      case "SyntaxError":
        break;
      default:
        throw err;
    }
  }
  next();
});

sessionMiddleware.use(cookieSession({
  name: "session",
  keys: [process.env["SECRET_KEY"]!],
}));
