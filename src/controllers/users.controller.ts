import { User } from "../common/models/user.ts";
import type { AuthenticatedRequest } from "../common/types.ts";
import { type Response } from "express";

export async function getAllUsers(
  _request: AuthenticatedRequest,
  response: Response,
) {
  const users = await User.findAll();
  response.json({ users });
}
