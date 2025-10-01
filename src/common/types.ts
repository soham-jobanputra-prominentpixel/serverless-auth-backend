import type { Request } from "express";
import type { User } from "./models/user.ts";

export interface AuthenticatedRequest extends Request {
  user?: User;
}

export interface UserRequestBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type LoginCredentials = Pick<UserRequestBody, "email" | "password">;

export interface RegisterRequestBody extends UserRequestBody {
  confirmPassword: string;
}
