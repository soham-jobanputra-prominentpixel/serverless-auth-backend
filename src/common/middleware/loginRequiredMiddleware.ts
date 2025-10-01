import type { NextFunction, Response } from "express";
import type { AuthenticatedRequest } from "../types.ts";
import { UnauthorizedError } from "../errors.ts";
import { User } from "../models/user.ts";

export default async function loginRequiredMiddleWare(
  request: AuthenticatedRequest,
  _response: Response,
  next: NextFunction,
) {
  if (!request.session) {
    throw new UnauthorizedError("User login required.");
  }
  const userId = request.session["userId"] as number;
  if (!userId) {
    throw new UnauthorizedError("User login required.");
  }
  const user = await User.findByPk(userId);
  if (!user) {
    throw new UnauthorizedError("User login required.");
  }
  request.user = user;
  next();
}
