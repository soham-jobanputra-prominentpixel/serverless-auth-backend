import { NextFunction, Request, Response, Router } from "express";
import morgan from "morgan";
import console from "node:console";

export const loggingMiddleware = Router();

loggingMiddleware.use(morgan("dev"));

loggingMiddleware.use(requestLogger);

function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  console.log(`Request received: ${req.method} ${req.originalUrl}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`Request to ${req.originalUrl} completed in ${duration}ms`);
  });

  next();
}
