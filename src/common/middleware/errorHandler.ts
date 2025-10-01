import { type NextFunction, type Request, type Response } from "express";
import console from "node:console";

export default function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction,
) {
  switch (error.name) {
    case "UnauthorizedError":
      response.status(401).json({
        error: { message: "Access restricted." + " " + error.message },
      });
      break;

    case "NotFoundError":
      response.status(404).json({
        error: { message: "Resource not found." + " " + error.message },
      });
      break;

    case "BadRequestError":
    case "ValidationError":
      response.status(400).json({
        error: { message: "Request is invalid." + " " + error.message },
      });
      break;

    default:
      logError(error);
      next();
      break;
  }
}

function logError(error: unknown): void {
  if (error instanceof Error) {
    console.error("❌ Error Message:", error.message);
    console.error("📌 Stack Trace:", error.stack);
  } else {
    console.error("⚠️ Unknown error:", JSON.stringify(error, null, 2));
  }
}
